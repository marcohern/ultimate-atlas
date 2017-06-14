<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Exceptions\DpiException;
use App\Exceptions\NotFoundException;
use App\Lib\Dpi;
use App\Lib\In;
use InterventionImage;

class Image extends Model
{
    protected $hidden = [
        'bytes',
    ];

    public static function query($limit=10,$offset=0) {
        $query = self::where('attached','TRUE');
        $query->take($limit)->skip($offset);
        return $query->get();
    }

    public static function queryIds($domain, $slug) {
        $query = self::where('domain',$domain)
            ->where('slug',$slug)
            ->where('index',0)
            ->where('profile','original')
            ->where('density','original');
    }

    public static function get($id) {
        return self::where('id', $id)->first();
    }

    public static function display() {
        $image = self::where('id',$id)->select(['type','bytes'])->first();
        if (!$image) throw new NotFoundException('Image not found');
        return $image;
    }

    public static function destroy($id)
    {
        $image = self::get($id);
        if (!$image) throw new NotFoundException('Image not found');
        $deleted = self::where('id',$id)->delete();
        $deleted += self::where('parent_id',$id)->delete();

        return [
            'affected' => $deleted,
            'deleted' => true,
            'image' => $image
        ];
    }

    public static function create($imagefpath) {
        $im = InterventionImage::make($imagefpath);
        $slug = md5(uniqid());
        $id = Image::insertGetId([
            'attached' => 'FALSE',
            'domain' => 'tmp',
            'slug' => $slug,
            'index' => 0,
            'profile' => 'original',
            'density' => 'original',
            'filename' => "tmp-$slug-temp-0.jpg",
            'type' => 'image/jpg',
            'width' => $im->width(),
            'height' => $im->height(),
            'parent_id' => null,

            'bytes' => $im->encode('jpg'),

            'created_at' => In::now()
        ]);
        $image = Image::where('id',$id)->first();
        return [
            'affected' => 1,
            'saved' => true,
            'image' => $image
        ];
    }

    public static function attach($ids, $domain, $slug) {
        
        if (is_array($ids)) {
            $i=0;
            foreach ($ids as $id) {
                self::where('id',$id)->update([
                    'domain' => $domain,
                    'slug' => $slug,
                    'index' => $i,
                    'attached' => 'TRUE',
                    'filename' => "$domain-$slug-$i.jpg",
                    'updated_at' => In::now()
                ]);
                $i++;
            }
        } else {
            self::where('id',$ids)->update([
                'domain' => $domain,
                'slug' => $slug,
                'index' => 0,
                'attached' => 'TRUE',
                'filename' => "$domain-$slug-$i.jpg",
                'updated_at' => In::now()
            ]);
        }
        return [
            'affected' => $i,
            'attached' => true
        ];
    }

    public static function detach($ids) {
        $domain = 'detached';
        $slug = md5(uniqid());


        if (is_array($ids)) {
            $i=0;
            foreach ($ids as $id) {
                $img = self::where('id',$id)->select(['domain','slug'])->first();
                self::where('domain',$img['domain'])
                    ->where('slug',$img['slug'])
                    ->where('profile','<>','original')
                    ->where('profile','<>','original')
                    ->delete();
                self::where('id',$id)->update([
                    'domain' => $domain,
                    'slug' => $slug,
                    'index' => $i,
                    'attached' => 'FALSE',
                    'filename' => "$domain-$slug-$i.jpg",
                    'updated_at' => In::now()
                ]);
                $i++;
            }
        } else {
            $img = self::where('id',$ids)->select(['domain','slug'])->first();
            self::where('domain',$img['domain'])
                ->where('slug',$img['slug'])
                ->where('profile','<>','original')
                ->where('profile','<>','original')
                ->delete();
            self::where('id',$ids)->update([
                'domain' => $domain,
                'slug' => $slug,
                'index' => 0,
                'attached' => 'FALSE',
                'filename' => "$domain-$slug-$i.jpg",
                'updated_at' => In::now()
            ]);
        }
        return [
            'affected' => $i,
            'detached' => true
        ];
    }

    public static function make($domain, $slug, $profile, $density, $index) {
        
        $imagedata = null;

        $record = self::where('domain',$domain)
            ->where('slug',$slug)
            ->where('profile', $profile)
            ->where('density', $density)
            ->where('index'  , $index)
            ->select(['id','type' ,'filename','width','height','bytes'])->first();
        
        if (empty($record)) {
            $record = self::where('domain',$domain)
                ->where('slug',$slug)
                ->where('profile', 'original')
                ->where('density', 'original')
                ->where('index'  , $index)
                ->select(['id','type' ,'filename','width','height','bytes'])->first();

            if (empty($record)) throw new NotFoundException("Image not found.");
            $size = null;
            try {
                $size = Dpi::size($profile, $density);
            } catch(DpiException $ex) {
                throw new NotFoundException("Image profile or density not found.", null, $ex);
            }

            $img = InterventionImage::make($record['bytes'])->fit($size[0],$size[1]);
            $imagedata = $img->encode('jpg');

            self::insert([
                'domain'   => $domain,
                'slug'     => $slug,
                'profile'  => $profile,
                'density'  => $density,
                'index'    => $index,
                'filename' => "$domain-$slug-$index-$profile-$density.jpg",
                'type'     => 'image/jpg',
                'width'    => $size[0],
                'height'   => $size[1],
                'parent_id' => $record['id'],
                'bytes' => $imagedata,
                'created_at' => In::now()
            ]);
        } else {
            $imagedata = $record['bytes'];
        }

        return $imagedata;
    }
}
