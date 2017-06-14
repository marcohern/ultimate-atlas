<?php

require_once("src/constants.php");
require_once("src/CsvReader.php");
require_once("src/ConsoleTabulator.php");
require_once("src/CsvTabulator.php");
require_once("src/GooglePlacePhotoCrawler.php");

_debug();

$infile = CURPATH.DS.'dimgf.csv';
$imgdir = ROOTPATH.DS.'laravel5'.DS.'database'.DS.'seeds'.DS.'Images'.DS.'Bars'.DS;
$csv = new CsvReader($infile);

$i=0;
$tot=0;
while($r = $csv->read()) {
    $slug = $r['slug'];
    //echo "!$slug\n";

    $cnt=0;

    for ($j=0;$j<10;$j++) {
        $file = $imgdir.$slug.".$j.jpg";
        if (file_exists($file)) {
            $cnt++;
        } else {
        }
    }
    $tot+=$cnt;

    if ($cnt > 0) printf("..%-':80s %2d %4d\n",$slug,$cnt,$tot);
    $i++;
    //if ($i>10) break;
}

$csv->close();