<?php
//error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "GoogleCrawler Index by Marco\n";

$settings = [
    'key' => 'AIzaSyB5JQFJ1eaHHNq238b1V2cgKIrxDFGdwLw',
    'lang' => 'es',
    'input' => 'index.csv',
    'output' => 'places_out.csv',
    'index' => [
        'url' => 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        'type' => 'bar'
    ]
];

function examine_index_result_item($o, $aid, $city, $area, $r) {
    global $seq;

    echo "$aid ".$r->name."\n";
    $name = $r->name;
    $id = $r->id;
    $place_id = $r->place_id;
    $rating = (isset($r->rating)) ? $r->rating : 0;
    $lat = $r->geometry->location->lat;
    $lng = $r->geometry->location->lng;
    $latne = $r->geometry->viewport->northeast->lat;
    $lngne = $r->geometry->viewport->northeast->lng;

    $latsw = $r->geometry->viewport->southwest->lat;
    $lngsw = $r->geometry->viewport->southwest->lng;

    $type0='';
    $type1='';
    $type2='';
    $type3='';
    $type4='';
    $cntype = count($r->types);

    if ($cntype > 0) $type0 = $r->types[0];
    if ($cntype > 1) $type1 = $r->types[1];
    if ($cntype > 2) $type2 = $r->types[2];
    if ($cntype > 3) $type3 = $r->types[3];
    if ($cntype > 4) $type4 = $r->types[4];

    fwrite($o, "$seq,$aid,$city,$area,OK,$id,$place_id,$name,$rating,$lat,$lng,$latne,$lngne,$latsw,$lngsw\n");
}

function examine_index_item($r,$o) {
    global $settings, $seq;
    $key = $settings['key'];
    $lang = $settings['lang'];
    $type = $settings['index']['type'];
    $endpoint = $settings['index']['url'];
    $aid = $r[0];
    $city = $r[1];
    $area = $r[2];
    $lat = 0+$r[3];
    $lng = 0+$r[4];
    $radius = 0+$r[5];

    echo "..".sprintf("%12s %12s",$city,$area);
    $url0 = "$endpoint?key=$key&language=$lang&type=$type&location=$lat,$lng&radius=$radius";
    
    sleep(1);
    $result = json_decode(file_get_contents($url0));
    $next = true;
    if ($result->status=='OK') {
        
        while ($next) {
            $cnt = count($result->results);
            echo "..$cnt OK\n";
            foreach ($result->results as $r) {
                examine_index_result_item($o, $aid, $city, $area, $r);
                $seq++;
            }
            

            if (isset($result->next_page_token)) {
                echo "..next page";
                $url = "$url0&pagetoken=".$result->next_page_token;
                sleep(2);
                $result = json_decode(file_get_contents($url));
                if ($result->status!='OK') {
                    echo "..fail\n$url\n";
                    
                    $next = false;
                }
            } else {
                echo "..NO next page";
                $next = false;
            }
            //exit(0);
        }
        
        
    } else {
        echo $result->status;
        fwrite($o,"$seq,$id,$city,$area,{$result->status},\"\",\"\",\"\",0.0,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000\n");
        $seq++;
    }
    echo "..done\n";
}

$f = fopen($settings['input'], "r");
$o = fopen($settings['output'], "w");

$seq=1;
$header = fgetcsv($f);
echo "...reading input\n";
fwrite($o,"#,AreaId,City,Area,Status,Id,PlaceId,Name,Rating,Lat,Lng,LatNE,LngNE,LatSW,LngSW\n");
while ($r = fgetcsv($f)) {
    examine_index_item($r,$o);
}

fclose($f);
fclose($o);