<?php

echo "GoogleCrawler Places by Marco\n";

$settings = [
    'key' => 'AIzaSyB5JQFJ1eaHHNq238b1V2cgKIrxDFGdwLw',
    'lang' => 'es',
    'input' => 'places_out.csv',
    'output' => 'places_details_out.csv',
    'place' => [
        'url' => 'https://maps.googleapis.com/maps/api/place/details/json'
    ],
    'photo' => [
        'url' => 'https://maps.googleapis.com/maps/api/place/photo'
    ]
];

function slugify($text) {
    $r = trim($text);
    $r = mb_strtolower($r);
    $r = str_replace(" ","-",$r);
    $r = str_replace("á","a",$r);
    $r = str_replace("é","e",$r);
    $r = str_replace("í","i",$r);
    $r = str_replace("ó","o",$r);
    $r = str_replace("ú","u",$r);
    $r = str_replace("ñ","n",$r);
    $r = preg_replace("/[\/,.'\"]/","",$r);
    $r = preg_replace("/-+/","-",$r);
    $r = preg_replace("/[^a-z0-9]$/","",$r);
    if (mb_strlen($r) > 64) $r = mb_substr($r,0,64);
    return $r;
}

$endpoint = $settings['place']['url'];
$key = $settings['key'];
$seq = 0;
$ids = [];

$photoep = $settings['photo']['url'];

$f = fopen($settings['input'], "r");
$o = fopen($settings['output'], "w");

$h = fgetcsv($f);

fwrite($o,"PlaceId,Name,Phone,Addr,Photos\n");
while ($place = fgetcsv($f)) {
    $seq++;
    $name = $place[7];
    $place_id = $place[6];
    $slug = slugify($name);
    
    $url = "$endpoint?key=$key&placeid=$place_id";

    printf("..%48s",$slug);

    if (array_key_exists($place_id, $ids)) {
        echo "..repeated\n";
        continue;
    }
    $ids[$place_id] = true;

    //sleep(2);
    $c = json_decode(file_get_contents($url));
    if ($c) {
        if ($c->status == 'OK') {
            $r = $c->result;

            $name = $r->name;
            $formaddr = (isset($r->formatted_address)) ? $r->formatted_address : '';
            $arraddr = explode(',',$formaddr);
            $addr = '';
            if (count($arraddr) > 0) {
                $addr = $arraddr[0];
            }

            $zip = '';
            if (count($r->address_components)>0) {
                $aclen = count($r->address_components);
                $zip = $r->address_components[$aclen-1];
            }
            $phone = (isset($r->international_phone_number)) ?  $r->international_phone_number
                : (isset($r->formatted_phone_number)) ? $r->formatted_phone_number : '';
            $rating = (isset($r->rating)) ? $r->rating : 0;
            $website = (isset($r->website)) ? $r->website : '';

            $cnphotos = 0;
            if (isset($r->photos)) {
                $i=0;
                $cnt=0;
                $cnphotos = count($r->photos);
                printf("..%2d ps",$cnphotos);
                foreach($r->photos as $photo) {
                    break;
                    $ref = $photo->photo_reference;
                    $photourl = "$photoep?key=$key&photoreference=$ref";
                    if ($photo->width<800 && $photo->height <600) {
                        echo "..p$i:s";
                        $i++;
                        continue;
                    }
                    sleep(2);

                    $bytes = file_get_contents($photourl);
                    if ($bytes) {
                        echo "..p$i:1";
                        $cnt++;
                        file_put_contents("./places/photos/$slug-$seq.jpg",$bytes);
                    } else {
                        echo "..p$i:0";
                    }

                    $seq++;
                    $i++;
                    if ($cnt>=3) break;
                }
            } else {
                printf("..%2d ps",0);
            }
            fwrite($o,"$place_id,$name,$phone,$addr,$cnphotos\n");
            printf("..done\n");

        } else {
            printf("..{$c->status}\n");
        }
    } else {
        printf("..ERROR\n");
    }
    //break;
}

fclose($o);
fclose($f);