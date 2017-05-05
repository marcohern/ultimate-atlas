<?php

namespace App\Lib;

use Illuminate\Support\Facades\Hash;
use App\Lib\Salt;

class PasswordGenerator {

    public static function salt() {
        return Salt::make(48);
    }

    public static function hash($salt, $password) {
        return Hash::make($salt.$password);
    }

    public static function check($typedPassword, $salt, $encodedPassword) {
        return Hash::check($salt.$typedPassword, $encodedPassword);
    }
}