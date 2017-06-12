<?php

require_once("constants.php");
require_once("CsvReader.php");
require_once("Tabulator.php");

class GoogleNearbyCrawler {
    private static $_ep = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    private static $_types = ['bar','restaurant','night_club','casino'];
    private static $_lang = 'es';
    private $id;
    private $city;
    private $area;
    private $lat;
    private $lng;
    private $radius;
    private $outfile;

    private $tab;
    private $i;

    public function __construct($outfile) {
        $this->outfile = $outfile;
        $this->i = 0;

        $this->tab = new Tabulator([
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
        ],['AreaId','Area','Id','PlaceId','Rating']);
        echo $this->tab->formattedHeader();
        $this->tab->openCsv($this->outfile);
        $this->tab->writeCsvHeader();
    }

    public function set($row) {
        $this->id = $row['Id'];
        $this->city = $row['City'];
        $this->area = $row['Area'];
        $this->lat = $row['Lat'];
        $this->lng = $row['Lng'];
        $this->radius = $row['Radius'];

    }

    private function processRecord($r) {

        $id = $r->id;
        $place_id = $r->place_id;
        $name = '';
        if (isset($r->name)) $name = $r->name;

        $rating = 0.0;
        if (isset($r->rating)) $rating = $r->rating;

        $r = [
            'AriaId'  => $this->id,
            'Area'    => "{$this->city}{$this->area}",
            'Status'  => 'OK',
            'Id'      => $id,
            'PlaceId' => $place_id,
            'Name'    => $name,
            'Rating'  => $rating,
            'Lat'     => $r->geometry->location->lat,
            'Lng'     => $r->geometry->location->lng,
            'LatNE'   => $r->geometry->viewport->northeast->lat,
            'LngNE'   => $r->geometry->viewport->northeast->lng,
            'LatSW'   => $r->geometry->viewport->southwest->lat,
            'LngSW'   => $r->geometry->viewport->southwest->lng
        ];
        return $r;
    }

    private function processError($status) {
        $r = [
            'AriaId'  => $this->id,
            'Area'    => "{$this->city}.{$this->area}",
            'Status'  => $status,
            'Id'      => '',
            'PlaceId' => '',
            'Name'    => '',
            'Rating'  => 0.0,
            'Lat'     => 0.0,
            'Lng'     => 0.0,
            'LatNE'   => 0.0,
            'LngNE'   => 0.0,
            'LatSW'   => 0.0,
            'LngSW'   => 0.0
        ];
    }

    private function read($url,$i=0) {
        $txt = file_get_contents($url);
        $c = json_decode($txt);
        if ($txt) { file_put_contents("output.$i.out.txt",$url."\n".$txt); }
        if ($c) {
            if ($c->status=='OK') {
                foreach ($c->results as $r) {
                    $row = $this->processRecord($r);
                    $this->tab->writeCsv($row);
                    echo $this->tab->formattedValues($row);
                }
                if ($c->next_page_token) {
                    return $c->next_page_token;
                }
            } else {
                $row = $this->processError($c->status);
                $this->tab->writeCsv($row);
            }
        } else {
            $row = $this->processError("ERROR");
            $this->tab->writeCsv($row);
        }
        return false;
    }

    public function process($type) {
        $i=0;
        $key = API_KEY;
        $url = self::$_ep."?key=$key&type=$type&language=".self::$_lang."&location={$this->lat},{$this->lng}&radius={$this->radius}";
        echo "--$url\n";
        $r = $this->read($url,$this->i);
        echo "--$r\n";
        while ($r) {
            $this->i++;
            echo "NEXT PAGE\n";
            $url = self::$_ep."?key=$key&type=$type&language=".self::$_lang."&location={$this->lat},{$this->lng}&radius={$this->radius}&pagetoken=$r";
            sleep(2);
            $r = $this->read($url,$this->i);
            echo "--$r\n";
        }
        echo "NO MORE PAGES\n";
    }

    public function close() {
        $this->tab->closeCsv();
    }
}