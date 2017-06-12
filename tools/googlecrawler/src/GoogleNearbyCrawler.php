<?php

require_once("constants.php");
require_once("CsvReader.php");
require_once("ConsoleTabulator.php");
require_once("CsvTabulator.php");

class GoogleNearbyCrawler {
    private static $_ep = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    private static $_types = ['bar','restaurant','night_club','casino'];
    private static $_lang = 'es';

    private $infile;
    private $outfile;
    private $ids = [];
    private $type = '_NA_';
    private $page = 0;


    private $tab;
    private $csv;
    private $out;
    private $outids;
    private $in;
    private $reqqty;
    private $total;

    public function __construct() {
        $this->infile = CURPATH.DS.'index.csv';
        $this->outfile = ROOTPATH.DS.'output'.DS.'places'.DS.'places.csv';
        $this->reqqty = 0;
        $this->total = 0;

        echo "IN:".$this->infile."\n";
        echo "OUT:".$this->outfile."\n";

        $this->csv = new CsvTabulator([
            Tabulator::integer("AreaId" ,  6),
            Tabulator::string ("Area"   , 24, false),
            Tabulator::string ("Status" , 16, false),
            Tabulator::string ("Type"   , 16, false),
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
        ], $this->outfile);

        $this->outids = new CsvTabulator([
            Tabulator::string ("PlaceId", 27, false),
        ], ROOTPATH.DS.'output'.DS.'places'.DS.'places_ids.csv');

        $this->out = new ConsoleTabulator([
            Tabulator::string ("Area"   , 24, false),
            Tabulator::string ("Type"   , 16),
            Tabulator::integer("Page"   ,  4),
            Tabulator::string ("Status" , 16, false),
            Tabulator::integer("Qty"    ,  4),
            Tabulator::integer("Rep"    ,  4),
            Tabulator::integer("Tot"    ,  4),
            Tabulator::integer("RC"     ,  4),
        ]);
    }

    public function start() {
        $this->csv->start();
        $this->out->start();
        $this->outids->start();
        
    }

    public function end() {
        $this->csv->end();
        $this->out->end();
        $this->outids->end();
    }

    private function displayRecord($item, $status, $qty, $rep) {
        $record = [
            'Area' => $item['City'].$item['Area'],
            'Type' => $this->type,
            'Page' => $this->page,
            'Status' => $status,
            'Qty' => $qty,
            'Rep' => $rep,
            'Tot' => $this->total,
            'RC'  => $this->reqqty
        ];
        $this->out->write($record);
    }

    private function processRecord($r, $item) {
        $area_id = $item['Id'];
        $area = $item['City'].$item['Area'];
        $id = $r->id;
        $place_id = $r->place_id;
        $name = $r->name;

        $rating = 0.0;
        if (isset($r->rating)) $rating = $r->rating;

        $r = [
            'AreaId'  => $area_id,
            'Area'    => $area,
            'Status'  => 'OK',
            'Type'    => $this->type,
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

    private function processError($status, $item) {
        $area_id = $item['Id'];
        $area = $item['City'].$item['Area'];
        $r = [
            'AriaId'  => $area_id,
            'Area'    => $area,
            'Status'  => $status,
            'Type'    => $this->type,
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
        return $r;
    }

    private function read($url, $item) {
        //echo "......READING....!\n";
        $txt = file_get_contents($url);
        $c = json_decode($txt);
        $this->reqqty++;
        //echo "......READ!\n";
        
        //if ($txt) { file_put_contents("output.$i.out.txt",$url."\n".$txt); }
        if ($c) {
            //echo "......PARSED!\n";
            if ($c->status=='OK') {
                $cnt = count($c->results);
                $this->total += $cnt;
                $repeated = 0;
                //echo "......$cnt places!\n";
                foreach ($c->results as $r) {
                    if (!array_key_exists($r->place_id, $this->ids)) {
                        $row = $this->processRecord($r, $item);
                        $this->outids->write(['PlaceId' => $r->place_id]);
                        $this->csv->write($row);
                    } else {
                        $repeated++;
                    }
                }
                $this->displayRecord($item,'OK',$cnt,$repeated);
                //echo "......$repeated repeated!\n";
                if (isset($c->next_page_token)) {
                    //echo "......NEXT PAGE!\n";
                    return $c->next_page_token;
                }
            } else {
                //echo "......{$c->status}\n";
                $this->displayRecord($item,$c->status,0,0);
                $row = $this->processError($c->status, $item);
                $this->csv->write($row);
            }
        } else {
            //echo "......ERROR\n";
            $this->displayRecord($item,"ERROR",0,0);
            $row = $this->processError("ERROR", $item);
            $this->csv->write($row);
        }
        return false;
    }

    private function readPages($url, $item) {
        $i=0;
        $this->page = 1;
        //echo "--$url\n";
        $r = $this->read($url, $item);
        while ($r) {
            $nurl = "$url&pagetoken=$r";
            //echo "--$nurl\n";
            sleep(2);
            $this->page++;
            $r = $this->read($nurl, $item);
        }
    }

    public function process($type) {
        $this->type = $type;
        //echo "..Procesing: $type\n";
        $key = API_KEY;
        $this->in = new CsvReader($this->infile);

        while ($r = $this->in->read()) {
            $area = $r['City'].$r['Area'];
            $lat = 0+$r['Lat'];
            $lng = 0+$r['Lng'];
            $radius = 0+$r['Radius'];
            //echo "....$area:\n";
            $url = self::$_ep."?key=$key&language=es&type=$type&location=$lat,$lng&radius=$radius";
            $this->readPages($url, $r);
            //break;
        }
        $this->in->close();
        //echo "..TOTAL ".$this->reqqty." requests\n";
    }
}