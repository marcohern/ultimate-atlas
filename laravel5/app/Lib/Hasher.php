<?php

namespace App\Lib;

use Illuminate\Support\Facades\Hash;

class Hasher {

    private static $tpl = "abcdefghijlkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#&%()[]{}!?.,_+-*/\\";

    public static function random($length=64) {
        $r = "";
        $n = strlen(self::$tpl);
        for ($i=0; $i<$length; $i++) {
            $index = rand(0, $n-1);
            $r .= self::$tpl[$index];
        }
        return $r;
    }

    public static function unique($length=64) {
        $uid = uniqid("mrc", true);
        $l = $length - strlen($uid);
        if ($l<=0) return $uid;
        else return self::random($l).$uid;
    }

    public static function token() {
        return hash("sha256", self::unique(128));
    }

    public static function salt() {
        return self::random(48);
    }

    public static function password($salt, $password) {
        return Hash::make($salt.$password);
    }

    public static function check($typedPassword, $salt, $encodedPassword) {
        return Hash::check($salt.$typedPassword, $encodedPassword);
    }
}