<?php

namespace App\Lib;

class Salt
{
    private static $tpl = "abcdefghijlkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#&%()[]{}!?_-.,";

    public static function make($length=16) {
        $n = strlen(self::$tpl);
        $r = "";
        for ($i=0; $i<$length; $i++) {
            $index = rand(0, $n-1);
            $r .= self::$tpl[$index];
        }
        return $r;
    }
}