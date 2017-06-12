<?php

require_once("ITabulator.php");

abstract class Tabulator implements ITabulator {

    protected $filepath;
    protected $file;

    protected $format;
    protected $header;
    protected $headerFormatStr;
    protected $formatStr;

    protected $sep;
    protected $end;

    public static function integer($name, $size=0) {
        return ['d',$name,$size,0,false];
    }

    public static function string($name, $size=0,$quoted=true) {
        return ['s',$name,$size,0,$quoted];
    }

    public static function decimal($name, $size=0, $precision=0) {
        return ['f',$name,$size,$precision,false];
    }

    protected function buildFormatStrings() {
        $this->formatStr = '';
        $this->headerFormatStr = '';
        $this->header = [];
        $i=0;
        foreach ($this->format as $f) {
            $this->header[$i] = $f[1];
            $this->headerFormatStr .= (($i==0) ? '' : $this->sep).$this->headerFormat($f[0], $f[1], $f[2], $f[3], $f[4]);
            $this->formatStr       .= (($i==0) ? '' : $this->sep).$this->valueFormat($f[0], $f[1], $f[2], $f[3], $f[4]);
            $i++;
        }
        $this->headerFormatStr.=$this->end;
        $this->formatStr.=$this->end;
    }

    public function start() {
        $this->file = fopen($this->filepath, "w");
        $this->writeHeader();
    }

    private function writeHeader() {
        //echo "HEADER FORMAT:".$this->headerFormatStr."\n";
        //var_dump($this->header);
        vfprintf($this->file, $this->headerFormatStr, $this->header);
    }

    public function write(array $row) {
        vfprintf($this->file, $this->formatStr, $row);
    }

    public function end() {
        fclose($this->file);
    }

    abstract protected function valueFormat($type, $name, $size, $precision, $quoted);
    abstract protected function headerFormat($type, $name, $size, $precision, $quoted);
}