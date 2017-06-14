<?php

require_once("src/constants.php");
require_once("src/CsvReader.php");
require_once("src/ConsoleTabulator.php");
require_once("src/CsvTabulator.php");
require_once("src/PhotoIndexNormalizer.php");

_debug();

$pin = new PhotoIndexNormalizer();

$pin->process();