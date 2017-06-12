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

define('CURPATH',dirname(dirname(__FILE__)));// /<project>/tools/googlecrawler/
define('DS', _ds());
//define('API_KEY','AIzaSyBWrvIdSl-smOWvknZva4OT1bWsmPh1Wuc'); //Ultimate-Atlas
define('API_KEY','AIzaSyB5JQFJ1eaHHNq238b1V2cgKIrxDFGdwLw'); //iParty
define('TOOLSPATH', dirname(CURPATH  )); // /<project>/tools/
define('ROOTPATH' , dirname(TOOLSPATH)); // /<project>/
