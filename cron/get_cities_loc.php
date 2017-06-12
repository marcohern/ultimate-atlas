<?php

$input = "bars.csv";
$output = "bars_out.csv";
$key = 'AIzaSyB260TT5jlbjS4ceGS042r_D7v8b7f7uPM';
$endpoint = 'https://maps.googleapis.com/maps/api/geocode/json';
$i=0;
$max=100;
echo "Start!\n";

$f = fopen($input,"r");

$out = fopen($output,"w");
fwrite($out,"No,Query,Lat,Lng,Addr,Addr0,Addr1,Zip,Type0,Type1,Type2,Type3,Status\n");
echo "file read\n";
$h = fgetcsv($f);
echo "skipped headers\n";
while ($r = fgetcsv($f)) {
    echo "...".$r[1]."...";
    $enc = urlencode($r[1]);
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
                    $addr = $l->results[0]->formatted_address;
                    $addr0 = '';
                    $addr1 = '';
                    $cnt = count($l->results[0]->address_components);
                    $zipi = $cnt-1;
                    $zip = ($zipi>=0) ? $l->results[0]->address_components[$zipi]->long_name : '';
                    if ($cnt>0) {
                        $addr0 = $l->results[0]->address_components[0]->long_name;
                        if ($cnt>1) 
                            $addr1 = $l->results[0]->address_components[1]->long_name;
                    }
                    $type0 = '';
                    $type1 = '';
                    $type2 = '';
                    $type3 = '';
                    if ($l->results[0]->types) {
                        if (count($l->results[0]->types) > 0)
                            $type0 = $l->results[0]->types[0];
                        if (count($l->results[0]->types) > 1)
                            $type1 = $l->results[0]->types[1];
                        if (count($l->results[0]->types) > 2)
                            $type2 = $l->results[0]->types[2];
                        if (count($l->results[0]->types) > 3)
                            $type3 = $l->results[0]->types[3];
                    }
                    fwrite($out,$r[0].",\"".$r[1]."\",$lat,$lng,\"$addr\",\"A:$addr0\",\"A:$addr1\",\"Z$zip\",$type0,$type1,$type2,$type3,OK\n");
                    echo "found:$lat,$lng...";
                } else {
                    echo "NO_LOCATION...";
                    fwrite($out,$r[0].",\"".$r[1]."\",0.0,0.0,,,,,,,,,NO_LOCATION\n");
                }
            } else {
                echo "NO_GEOMETRY...";
                fwrite($out,$r[0].",\"".$r[1]."\",0.0,0.0,,,,,,,,,NO_GEOMETRY\n");
            }
        } else {
            echo "NO_RESULT_0...";
            fwrite($out,$r[0].",\"".$r[1]."\",0.0,0.0,,,,,,,,,NO_RESULT_0\n");
        }
    } else {
        echo "NO_RESULT...";
        fwrite($out,$r[0].",\"".$r[1]."\",0.0,0.0,,,,,,,,,NO_RESULT\n");
    }
    echo "done\n";

    $i++;
    //if ($i>=$max) break;
}

fclose($f);
fclose($out);