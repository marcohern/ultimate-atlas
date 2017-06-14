<?php

namespace App\Lib;


class Slugger {
    public static $_rc = [
        ['á','a'],
        ['é','e'],
        ['í','i'],
        ['ó','o'],
        ['ú','u'],
        ['ü','u'],
        ['ñ','n'],
        ['ç','c'],
    ];

    public static $_entropy = "abcdefghijklmnopqrstuvwxyz0123456789";

    public static function  slugifyx($name) {
        
        $slug = mb_strtolower($name);
        foreach (self::$_rc as $c) {
            $f = $c[0];
            $t = $c[1];
            $slug = str_replace($f, $t, $slug);
        }

        $slug = preg_replace('/[\s\'\.,:;\/+!\?¡¿"%$&\\\()\[\]{}]/','-',$slug);
        $slug = preg_replace('/^-+/',"",$slug);
        $slug = preg_replace('/-+$/',"",$slug);
        $slug = preg_replace('/-+/',"-", $slug);
        return $slug;
    }

    public static function slugify($string, $replace = array(), $delimiter = '-') {
        // https://github.com/phalcon/incubator/blob/master/Library/Phalcon/Utils/Slug.php
        if (!extension_loaded('iconv')) {
            throw new \Exception('iconv module not loaded');
        }
        // Save the old locale and set the new locale to UTF-8
        $oldLocale = setlocale(LC_ALL, '0');
        setlocale(LC_ALL, 'en_US.UTF-8');
        $clean = iconv('UTF-8', 'ASCII//TRANSLIT', $string);
        if (!empty($replace)) {
            $clean = str_replace((array) $replace, ' ', $clean);
        }
        $clean = preg_replace("/[^a-zA-Z0-9\/_|+ -]/", '', $clean);
        $clean = strtolower($clean);
        $clean = preg_replace("/[\/_|+ -]+/", $delimiter, $clean);
        $clean = trim($clean, $delimiter);
        // Revert back to the old locale
        setlocale(LC_ALL, $oldLocale);
        return $clean;
    }

    public static function entropy() {
        $len = mb_strlen(self::$_entropy);
        $a = self::$_entropy[rand() % $len];
        $b = self::$_entropy[rand() % $len];
        return "$a$b";
    }
}