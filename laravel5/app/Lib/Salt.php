<?php

namespace App\Lib;

class Salt
{
    
    private static $tpls = [
        "abcdefghijlkmnopqrstuvwxyz",  //26
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",  //26
        "0123456789",                  //10
        "#&%()[]{}!?.,_+-*/\\" //19
    ];

    public static function make($length=16) {
        $n = count(self::$tpls);
        $r = "";
        for ($i=0; $i<$length; $i++) {
            $type = rand(0, $n-1);
            $l = strlen(self::$tpls[$type]);
            $index = rand(0, $l-1);
            $r .= self::$tpls[$type][$index];
        }
        return $r;
    }
}