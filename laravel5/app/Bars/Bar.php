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
    public $table = 'bars';
    private $imm;

    public function __construct() {
        $this->imm = App::make(\App\Models\Image::class);
    }

    public function search($city_id, $q='', $modified="1990-01-01 00:00:00", $limit=10, $offset=0) {
        $query = $this->take($limit)->skip($offset)
            ->select(['bars.*','cities.name AS city'])
            ->where('bars.enabled','TRUE')
            ->where('bars.city_id',$city_id)
            ->where('bars.modified','>=',$modified)
            ->join('cities', 'cities.id', '=', 'bars.city_id');
        
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

    public function view($id, $profile='', $density='',$root='') {
        $col = 'id';
        if (!is_numeric($id)) $col = 'slug';
        $bar = $this->where($col,$id)->first();
        if (!$bar) throw new NotFoundException("Bar not found");
        $slug = $bar['slug'];
        $photos = 0+$bar['photos'];
        if ($photos>0) {
            $photourls = [];
            $cover = '';
            if (!empty($profile) && !empty($density)) {
                $cover = "$root/i/bar/$profile/$density/$slug";
                for ($i=1;$i<$photos;$i++) {
                    $photourls[] = "$root/i/bar/$profile/$density/$slug/$i";
                }
            } else {
                $cover = "$root/i/bar/$slug";
                for ($i=1;$i<$photos;$i++) {
                    $photourls[] = "$root/i/bar/$slug/$i";
                }
            }
            $bar['photo_cover'] = $cover;
            $bar['photo_urls'] = $photourls;
        }
        
        return $bar;
    }

    public function create($data) {

        $images = $data['images'];
        if (empty($images)) $images = [];
        if (is_string($images)) $images = explode(',',$images);
        $data['slug'] = $this->slugifyUnique($data['name']);
        $data['enabled'] = 'FALSE';
        $data['verified'] = 'FALSE';
        $data['photos'] = count($images);
        $data['created_at'] = In::now();
        $data['modified'] = In::now();
        
        unset($data['images']);
        $barx = [];

        $id = Bar::insertGetId($data);
        $this->imm->attach($images, 'bar', $data['slug']);

        $bar = $this->view($id);
        return $bar;
    }

    public function modify($id, $data) {
        $bar = $this->where('id',$id)->first();
        if (!$bar) throw new NotFoundException("Bar not found");

        $newImages = $data['images'];
        $oldImages = Image::queryIds('bar',$data['slug']);
        unset($data['images']);

        $data['slug'] = $this->slugifyUnique($data['name']);
        $data['updated_at'] = In::now();
        $data['modified'] = In::now();

        $aff = $this->where('id',$id)->update($data);
        Image::detach($oldImages);
        Image::attach($newImages);
        
        $bar = $this->where('id',$id)->first();
        return $bar;
    }

    public function erase($id) {
        $bar = $this->where('id',$id)->first();
        if (!$bar) throw new NotFoundException("Bar not found");
        $this->where('id',$id)->delete();
        Image::where('domain','bar')->where('slug',$bar)->delete();
        return $bar;
    }

    public function slugifyUnique($string) {
        $slug = Slugger::slugify($string);
        $entropy = '';
        $rslug = $slug;
        while ($r = $this->where('slug',$rslug)->select(['slug'])->first()) {
            $entropy .= Slugger::entropy();
            $rslug = "$entropy-$slug";
        }
        return $rslug;
    }
}
