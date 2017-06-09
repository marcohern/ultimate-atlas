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
    public static function make($domain, $slug, $profile, $density, $index) {
        
        $imagedata = null;

        $record = Image::where('domain',$domain)
            ->where('slug',$slug)
            ->where('profile', $profile)
            ->where('density', $density)
            ->where('index'  , $index)
            ->select(['id','type' ,'filename','width','height','bytes'])->first();
        
        if (empty($record)) {
            $record = Image::where('domain',$domain)
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

            Image::insert([
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
