<?php

namespace App\Bars;

use Illuminate\Database\Eloquent\Model;

class Bar extends Model
{
    public static function query($q='', $city_id=null, $limit=10, $offset=0) {
        $query = self::where('bars.enabled','TRUE')->where('bars.city_id',$city_id);
        $query->leftJoin('barsx', 'barsx.id', '=','bars.id');
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
}
