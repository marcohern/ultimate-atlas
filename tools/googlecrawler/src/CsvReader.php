<?php

class CsvReader {
    
    private $f;
    private $hasHeader = false;
    private $header;

    public function __construct($filepath,$hasHeader=true) {
        $this->f = fopen($filepath, "r");
        $this->hasHeader = $hasHeader;
        if ($hasHeader) $this->readHeader();
    }
    
    private function readHeader() {
        $this->header = fgetcsv($this->f);
    }

    public function close() {
        fclose($this->f);
    }

    private function assocRow($row) {
        $r = [];
        foreach($this->header as $i => $h) {
            $r[$h] = $row[$i];
        }
        return $r;
    }

    public function read() {
        $row = fgetcsv($this->f);
        if ($row) {
            if ($this->hasHeader) {
                return $this->assocRow($row);
            } else {
                return $row;
            }
        }
        return false;
    }

    public function readAll() {
        $table = [];
        $i=0;
        while ($r = $this->read()) {
            $table[$i]= $r;
            $i++;
        }
        $this->close();
        return $table;
    }

    public function readBatch($rows) {
        $table = [];
        if ($rows<=0) return $table;
        $i=0;
        while ($r = $this->read()) {
            $table[$i]= $r;
            $i++;
            if ($i>=$rows) break;
        }
        return $table;
    }

    
}