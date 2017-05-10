<?php

namespace App\Lib;

class In {

    public static function now() {
        return new \Datetime("now");
    }

    public static function days($n) {
        return self::now()->add(new \DateInterval("P{$n}D"));
    }

    public static function loginTokenPeriod() {
        return self::days(2);
    }

    public static function passwordResetTokenPeriod() {
        return self::days(2);
    }
}