<?php

require_once("constants.php");
require_once("CsvReader.php");
require_once("ConsoleTabulator.php");
require_once("CsvTabulator.php");

class PhotoIndexNormalizer {

    private $in;
    private $out;

    public function __construct($outfile) {
        $infile = CURPATH.DS.'index_photos.csv';
        $outpath = ROOTPATH.DS.'output'.DS.'places'.DS.$outfile;
        
        $this->in = new CsvReader($infile);

        $this->out = new CsvTabulator([
            Tabulator::string ("Name"     , 20,  false),
            Tabulator::string ("Reference", 20,  true),
        ], $outpath);
    }

    public function process() {
        $this->out->start();
        $cr=0;
        $cp=0;
        $index=0;
        while ($r = $this->in->read()) {
            $cr++;
            for ($j=0;$j<=9;$j++) {
                $key = "Photo$j";
                
                $ref = (array_key_exists($key,$r)) ? $r[$key] : '';
                $filename = $r['No'].'.'.$r['Slug'].'.'.$j.'.jpg';
                if(!empty($ref)) {
                    $cp++;
                    $this->out->write(['Name' => $filename, 'Reference' => $ref]);
                } else break;
            }
            
        }
        $this->out->end();
        $this->in->close();
    }
}

/*
$pin = new PhotoIndexNormalizer("photos_norm.csv");
$pin->process();
*/