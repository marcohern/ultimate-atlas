<?php

namespace App\Lib;

class UrlToken
{
    private static $tpl = "abcdefghijlkmnopqrstuvwxyz0123456789_-";

    public static function make($length=60) {
        $n = strlen(self::$tpl);
        $r = "";
        for ($i=0; $i<$length; $i++) {
            $index = rand(0, $n-1);
            $r .= self::$tpl[$index];
        }
        return $r;
    }
}