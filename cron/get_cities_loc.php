<?php

$input = "cities_col.csv";
$key = 'AIzaSyB260TT5jlbjS4ceGS042r_D7v8b7f7uPM';
$endpoint = 'https://maps.googleapis.com/maps/api/geocode/json';
$i=0;
$max=100;
echo "Start!\n";

$f = fopen("cities.csv","r");

$out = fopen("cities_out.csv","w");
fwrite($out,"CityNo,CityID,Query,Lat,Lng,Status\n");
echo "file read\n";
$h = fgetcsv($f);
echo "skipped headers\n";
while ($r = fgetcsv($f)) {
    echo "...".$r[2]."...";
    $enc = urlencode($r[2]);
    $url = "$endpoint?key=$key&address=".$enc;
    $content = file_get_contents($url);
    echo "read...";
    $l = json_decode($content);
    echo "enc...";
    if ($l->results) {
        if (count($l->results) > 0) {
            if ($l->results[0]->geometry) {
                if ($l->results[0]->geometry->location) {
                    $lat = $l->results[0]->geometry->location->lat;
                    $lng = $l->results[0]->geometry->location->lng;
                    fwrite($out,$r[0].",".$r[1].",\"".$r[2]."\",".$lat.",".$lng.",OK\n");
                    echo "found:$lat,$lng...";
                } else {
                    echo "NO_LOCATION...";
                    fwrite($out,$r[0].",".$r[1].",\"".$r[2]."\",0.0,0.0,NO_LOCATION\n");
                }
            } else {
                echo "NO_GEOMETRY...";
                fwrite($out,$r[0].",".$r[1].",\"".$r[2]."\",0.0,0.0,NO_GEOMETRY\n");
            }
        } else {
            echo "NO_RESULT_0...";
            fwrite($out,$r[0].",".$r[1].",\"".$r[2]."\",0.0,0.0,NO_RESULT_0\n");
        }
    } else {
        echo "NO_RESULT...";
        fwrite($out,$r[0].",".$r[1].",\"".$r[2]."\",0.0,0.0,NO_RESULT\n");
    }
    echo "done\n";

    $i++;
    //if ($i>=$max) break;
}

fclose($f);
fclose($out);