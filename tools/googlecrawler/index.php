<?php

require_once("src/constants.php");
require_once("src/CsvReader.php");
require_once("src/ConsoleTabulator.php");
require_once("src/CsvTabulator.php");
require_once("src/GoogleNearbyCrawler.php");

_debug();

$types = ['bar','restaurant','night_club','casino'];

$gnc = new GoogleNearbyCrawler();
$gnc->start();

foreach ($types as $t) {
    $gnc->process($t);
}
$gnc->end();
