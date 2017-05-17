<?php

namespace App\Daily;

use Illuminate\Database\Eloquent\Model;

class DailyCat extends Model
{
    //
    public static function query() {
        return self::latest()->take(50)->get();
    }
}
