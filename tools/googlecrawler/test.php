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

/*
$types = [
    Tabulator::integer("AreaId" ,  6),
    Tabulator::string ("Area"   , 24, false),
    Tabulator::string ("Status" , 16, false),
    Tabulator::string ("Id"     , 40, false),
    Tabulator::string ("PlaceId", 27, false),
    Tabulator::string ("Name"   , 20,  true),
    Tabulator::decimal("Rating" ,  6,  1),
    Tabulator::decimal("Lat"    , 12,  8),
    Tabulator::decimal("Lng"    , 12,  8),
    Tabulator::decimal("LatNE"  , 12,  8),
    Tabulator::decimal("LngNE"  , 12,  8),
    Tabulator::decimal("LatSW"  , 12,  8),
    Tabulator::decimal("LngSW"  , 12,  8)
];

$data = [
    'AreaId' => 1,
    'Area' => 'AreaName',
    'Status' => 'OK',
    'Id' => 'IDIDIDIDIDIDIDIDIDIDIDIDIDIDIDIDIDIDIDID',
    'PlaceId' => 'PLACEIDPLACEIDPLACEIDPLACEI',
    'Name' => 'Place',
    'Rating' => 4.5,
    'Lat' =>  1.23456789,
    'Lng' => -9.87654321,
    'LatNE' =>  1.23456789,
    'LngNE' => -9.87654321,
    'LatSW' =>  1.23456789,
    'LngSW' => -9.87654321
];

$tab1 = new ConsoleTabulator($types);
$tab2 = new CsvTabulator($types,"php://stdout");

$tab1->start();
$tab1->write($data);
$tab1->end();
echo "\n\n";

$tab2->start();
$tab2->write($data);
$tab2->end();*/