<?php

require_once("src/constants.php");
require_once("src/CsvReader.php");
require_once("src/Tabulator.php");
require_once("src/GoogleNearbyCrawler.php");



$cr = new CsvReader(CURPATH.DS."index.csv");


$tb = new Tabulator([
    Tabulator::integer('Id',3),
    Tabulator::string('City',-12,false),
    Tabulator::string('Area',-12,false),
    Tabulator::decimal('Lat',12,8),
    Tabulator::decimal('Lng',12,8),
    Tabulator::integer('Radius',6)
],['City']);

echo $tb->debug();
echo $tb->formattedHeader();

$gnc = new GoogleNearbyCrawler(CURPATH.DS."test.out.csv");
while($row = $cr->read()) {
    echo $tb->formattedValues($row);
    $gnc->set($row);
    $gnc->process('bar');
    //break;
}

$gnc->close();