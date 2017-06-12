<?php

function _ds() {
    switch(PHP_OS) {
        case 'WIN32':
        case 'WINNT':
        case 'Windows':
            return '\\';
        default:
            return '/';
    }
}

function _debug() {
    echo "PHP_OS    = ".PHP_OS."\n";
    echo "CURPATH   = ".CURPATH."\n";
    echo "DS        = ".DS."\n";
    echo "TOOLSPATH = ".TOOLSPATH."\n";
    echo "ROOTPATH  = ".ROOTPATH."\n";
}

function slugify($text) {
    $r = trim($text);
    $r = mb_strtolower($r);
    $r = str_replace(" ","-",$r);
    $r = str_replace("á","a",$r);
    $r = str_replace("é","e",$r);
    $r = str_replace("í","i",$r);
    $r = str_replace("ó","o",$r);
    $r = str_replace("ú","u",$r);
    $r = str_replace("ñ","n",$r);
    $r = preg_replace("/[\/,.'\"]/","",$r);
    $r = preg_replace("/-+/","-",$r);
    $r = preg_replace("/[^a-z0-9]$/","",$r);
    if (mb_strlen($r) > 64) $r = mb_substr($r,0,64);
    return $r;
}

define('CURPATH',dirname(dirname(__FILE__)));// /<project>/tools/googlecrawler/
define('DS', _ds());
define('API_KEY','AIzaSyBWrvIdSl-smOWvknZva4OT1bWsmPh1Wuc'); //Ultimate-Atlas
//define('API_KEY','AIzaSyB5JQFJ1eaHHNq238b1V2cgKIrxDFGdwLw'); //iParty
define('TOOLSPATH', dirname(CURPATH  )); // /<project>/tools/
define('ROOTPATH' , dirname(TOOLSPATH)); // /<project>/
