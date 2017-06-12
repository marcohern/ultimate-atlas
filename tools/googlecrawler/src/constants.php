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

define('CURPATH',dirname(dirname(__FILE__)));
define('DS', _ds());
define('API_KEY','AIzaSyBWrvIdSl-smOWvknZva4OT1bWsmPh1Wuc');

