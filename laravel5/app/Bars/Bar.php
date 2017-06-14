<?php

namespace App\Bars;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Exceptions\NotFoundException;
use App\Lib\Slugger;
use App\Lib\In;
use App\Models\Image;

class Bar extends Model
{
    public static function query($q='', $city_id=null, $modified="1990-01-01 00:00:00", $limit=10, $offset=0) {
        $query = self::where('bars.enabled','TRUE')
            ->where('bars.city_id',$city_id)
            ->where('bars.modified','>=',$modified);
        $query->join('cities', 'cities.id', '=', 'bars.city_id');
        $query->select(['bars.*','cities.name AS city']);
        
        if (!empty($q)) {
            $qw = explode(' ',$q);
            $filter = '%';
            foreach($qw as $w) {
                $filter .= "$w%";
            }
            $query->where('bars.name', 'LIKE', $filter);
        }

        return $query->get();
    }

    public static function get($id, $profile='', $density='') {
        $bar = self::where('id',$id)->first();
        if (!$bar) throw new NotFoundException("Bar not found");

        $slug = $bar['slug'];
        $photos = 0+$bar['photos'];
        if ($photos>0) {
            $photourls = [];
            $cover = '';
            if (!empty($profile) && !empty($density)) {
                $cover = "/i/bar/$profile/$density/$slug";
                for ($i=0;$i<$photos;$i++) {
                    $photourls[$i] = "/i/bar/$profile/$density/$slug/$i";
                }
            } else {
                $cover = "/i/bar/$slug";
                for ($i=0;$i<$photos;$i++) {
                    $photourls[$i] = "/i/bar/$slug/$i";
                }
            }
            $bar['photo_cover'] = $cover;
            $bar['photo_urls'] = $photourls;
        }
        
        return $bar;
    }

    public static function create($data) {

        $images = $data['images'];
        if (empty($images)) $images = [];
        if (is_string($images)) $images = explode(',',$images);
        $data['slug'] = self::slugifyUnique($data['name']);
        $data['enabled'] = 'TRUE';
        $data['verified'] = 'FALSE';
        $data['photos'] = count($images);
        $data['created_at'] = In::now();
        $data['modified'] = In::now();
        
        unset($data['images']);
        $barx = [];
        
        $id = Bar::insertGetId($data);

        $bar = Bar::where('id',$id)->first();
        return $bar;
    }



    public static function modify($id, $data) {
        $bar = Bar::where('id',$id)->first();
        if (!$bar) 

        $data['slug'] = self::slugifyUnique($data['name']);
        $data['updated_at'] = In::now();
        $data['modified'] = In::now();

        $aff = Bar::where('id',$id)->update($data);
        if ($aff==0) throw new NotFoundException("Bar not found");
        $bar = Bar::where('id',$id)->first();
        return $bar;
    }

    public static function destroy($id) {
        $bar = self::where('id',$id)->first();
        if (!$bar) throw new NotFoundException("Bar not found");
        Bar::where('id',$id)->delete();
        return $bar;
    }

    public static function slugifyUnique($string) {
        $slug = Slugger::slugify($string);
        $entropy = '';
        $rslug = $slug;
        while ($r = self::where('slug',$rslug)->select(['slug'])->first()) {
            $entropy .= Slugger::entropy();
            $rslug = "$entropy-$slug";
        }
        return $rslug;
    }
}
