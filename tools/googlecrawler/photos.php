<?php

require_once("src/constants.php");
require_once("src/CsvReader.php");
require_once("src/ConsoleTabulator.php");
require_once("src/CsvTabulator.php");
require_once("src/GooglePlacePhotoCrawler.php");

_debug();

$pin = new GooglePlacePhotoCrawler();
$pin->process();