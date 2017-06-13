<?php 
require_once("constants.php");
require_once("CsvReader.php");
require_once("ConsoleTabulator.php");
require_once("CsvTabulator.php");
//https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyBWrvIdSl-smOWvknZva4OT1bWsmPh1Wuc&maxheight=1440&photoreference=CmRaAAAAVnADty7ONTdw7Wvo5lanM2oO3gw8a83gCfvlYReeCTXrcBC5xOMub-E6Ehsn38RDiU2EVYDVgoLZ-aQvF_gJjruQgixJ53SiHL8GMAYCQfZAKXs9H_1wTxmDdCI_5D3-EhBlS3CJeD-uql5ec_tlKafbGhTKxLgJPvjLUFAO98OpVkTMgzHYLA
class GooglePlacePhotoCrawler {
    private static $_ep = 'https://maps.googleapis.com/maps/api/place/photo';
    private $outdir;
    private $infile;

    public function __construct() {
        $this->outdir = ROOTPATH.DS.'output'.DS.'places'.DS.'img'.DS;
        $this->infile = CURPATH.DS.'photos.csv';
    }

    public function process() {
        echo "FILE:".$this->infile."\n";
        echo "OUT:".$this->outdir."\n";
        $csv = new CsvReader($this->infile);
        $endpoint = self::$_ep;
        $key = API_KEY;
        $i=0;
        while ($r = $csv->read()) {
            $name = $r['Name'];
            $file = $this->outdir.$name;
            $ref = $r['Reference'];
            $url = "$endpoint?key=$key&maxheight=1440&photoreference=$ref";

            echo "..$name";

            $bytes = file_get_contents($url);
            $status = $http_response_header[0];
            file_put_contents($file, $bytes);

            echo "..$status\n";
            $i++;
        }
        $csv->close();
    }
}