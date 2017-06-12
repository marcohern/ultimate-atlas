<?php

require_once("constants.php");
require_once("CsvReader.php");
require_once("ConsoleTabulator.php");
require_once("CsvTabulator.php");

class GooglePlaceDetailCrawler {
    private static $_ep = 'https://maps.googleapis.com/maps/api/place/details/json';

    private $in;
    private $out;
    private $csv;
    private $i;
    
    public function __construct() {
        $this->i=0;
        $outfile = ROOTPATH.DS.'output'.DS.'places'.DS.'places_details.csv';

        $this->csv = new CsvTabulator([
            Tabulator::string ("PlaceId",27,false),
            Tabulator::string ("Status",12,false),
            Tabulator::string ("Name",27,true),
            Tabulator::string ("Address",32,true),
            Tabulator::string ("Phone",32,true),
            Tabulator::decimal("Rating",6,1),
            Tabulator::string ("Website",32,true),
            Tabulator::integer("Photos",2,false),

            Tabulator::decimal("Lat"    , 12,  8),
            Tabulator::decimal("Lng"    , 12,  8),
            Tabulator::decimal("LatNE"  , 12,  8),
            Tabulator::decimal("LngNE"  , 12,  8),
            Tabulator::decimal("LatSW"  , 12,  8),
            Tabulator::decimal("LngSW"  , 12,  8),

            Tabulator::string ("Photo0",0,false),
            Tabulator::string ("Photo1",0,false),
            Tabulator::string ("Photo2",0,false),
            Tabulator::string ("Photo3",0,false),
            Tabulator::string ("Photo4",0,false),
            Tabulator::string ("Photo5",0,false),
            Tabulator::string ("Photo6",0,false),
            Tabulator::string ("Photo7",0,false),
            Tabulator::string ("Photo8",0,false),
            Tabulator::string ("Photo9",0,false)
        ], $outfile);
    }

    private function processRecord($placeid, $r) {
        $address = '';
        $address = (isset($r->vicinity)) ? $r->vicinity : '';
        if (empty($address)) {
            if (isset($r->formatted_address)) {
                $addr = explode(',', $r->formatted_address);
                $address = $addr[0];
            }
        }
        $phone = '';
        $phone = (isset($r->international_phone_number)) ? $r->international_phone_number :
                 (isset($r->formatted_phone_number    )) ? $r->formatted_phone_number     : '';
        $rating = 0.0;
        $rating = (isset($r->rating)) ? $r->rating : 0.0;
        $website = '';
        $website = (isset($r->website)) ? $r->website : '';
        
        $res = [
            'PlaceId' => $placeid,
            'Status' => 'OK',
            'Name' => $r->name,
            'Address' => $address,
            'Phone'   => $phone,
            'Rating'  => $rating,
            'Website' => $website,
            'Photos'  => 0,
            
            'Lat'     => $r->geometry->location->lat,
            'Lng'     => $r->geometry->location->lng,
            'LatNE'   => $r->geometry->viewport->northeast->lat,
            'LngNE'   => $r->geometry->viewport->northeast->lng,
            'LatSW'   => $r->geometry->viewport->southwest->lat,
            'LngSW'   => $r->geometry->viewport->southwest->lng,

            'Photo0'  => '',
            'Photo1'  => '',
            'Photo2'  => '',
            'Photo3'  => '',
            'Photo4'  => '',
            'Photo5'  => '',
            'Photo6'  => '',
            'Photo7'  => '',
            'Photo8'  => '',
            'Photo9'  => '',
        ];

        $photos = 0;
        if (isset($r->photos)) {
            $photos = count($r->photos);
            $res['Photos'] = $photos;
            $i=0;
            foreach ($r->photos as $photo) {
                if ($i>9) break;
                $res["Photo$i"] = $photo->photo_reference;
                $i++;
                
            }
        }

        $this->csv->write($res);
    }

    private function processError($placeid, $status) {
        $res = [
            'PlaceId' => $placeid,
            'Status' => $status,
            'Name' => '',
            'Address' => '',
            'Phone'   => '',
            'Rating'  => 0,
            'Website' => '',
            'Photos'  => 0,
            
            'Lat'     => 0,
            'Lng'     => 0,
            'LatNE'   => 0,
            'LngNE'   => 0,
            'LatSW'   => 0,
            'LngSW'   => 0,

            'Photo0'  => '',
            'Photo1'  => '',
            'Photo2'  => '',
            'Photo3'  => '',
            'Photo4'  => '',
            'Photo5'  => '',
            'Photo6'  => '',
            'Photo7'  => '',
            'Photo8'  => '',
            'Photo9'  => '',
        ];

        $this->csv->write($res);
    }

    private function read($placeid) {
        $endpoint = self::$_ep;
        $key = API_KEY;

        sleep(1);
        $this->i++;
        echo $this->i."..$placeid";
        $url = "$endpoint?key=$key&placeid=$placeid";
        
        $txt = file_get_contents($url);
        $c = json_decode($txt);
        
        if ($c) {
            if ($c->status == 'OK') {
                echo "..OK\n";
                $this->processRecord($placeid, $c->result);
            } else {
                //ERROR
                echo "..".$c->status."\n";
                $this->processError($placeid, $c->status);
            }
        } else {
            //ERROR
            echo "..ERROR\n";
            $this->processError($placeid, "ERROR");
        }
    }

    

    public function process() {

        $this->in = new CsvReader(ROOTPATH.DS.'output'.DS.'places'.DS.'places_ids.csv');
        $this->csv->start();
        $i = 0;
        while ($r = $this->in->read()) {
            $placeid = $r['PlaceId'];
            $this->read($placeid);
            $i++;
            //if ($i>5) break;
        }

        $this->csv->end();
        $this->in->close();
    }
}
