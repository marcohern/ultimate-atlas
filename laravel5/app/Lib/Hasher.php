<?php

namespace App\Lib;

use Illuminate\Support\Facades\Hash;

class Hasher {
    private static $tpl = "abcdefghijlkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#&%()[]{}!?.,_+-*/\\";

    public function __construct() {

    }

    public function random($length=64) {
        $r = "";
        $n = strlen(self::$tpl);
        for ($i=0; $i<$length; $i++) {
            $index = rand(0, $n-1);
            $r .= self::$tpl[$index];
        }
        return $r;
    }

    public function unique($length=64) {
        $uid = uniqid("mrc", true);
        $l = $length - strlen($uid);
        if ($l<=0) return $uid;
        else return $this->random($l).$uid;
    }

    public function token() {
        return hash("sha256", $this->unique(128));
    }

    public function salt() {
        return $this->random(48);
    }

    public function password($salt, $password) {
        return Hash::make($salt.$password);
    }

    public function check($typedPassword, $salt, $encodedPassword) {
        return Hash::check($salt.$typedPassword, $encodedPassword);
    }
}