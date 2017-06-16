<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Country extends Model
{
    //
    public static function query($name='',$limit=10,$offset=0) {
        $countries = self::select()->take($limit)->from($offset);
        return $countries->list();
    }
}
