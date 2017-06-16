<?php

namespace App\Lib;

use Exception;

class CsvReaderException extends Exception {
    public function __construct($message, $code=0, Exception $previous = null) {
        parent::__construct($message, $code, $previous);
    }
}

class CsvReader {
    
    private $f;
    private $hasHeader = false;
    private $header;

    private function getStream($source) {
        if (is_string($source)) {
            if (!file_exists($source)) throw new CsvReaderException("file '$source' does not exists.");
            return fopen($source, "r");

        }
        if (is_resource($source) && get_resource_type($source) == "stream") {
            return $source;
        }
        throw new CsvReaderException("Source invalid.");
    }
    
    private function readHeader() {
        $this->header = fgetcsv($this->f);
    }

    private function assocRow($row) {
        $r = [];
        foreach($this->header as $i => $h) {
            $r[$h] = $row[$i];
        }
        return $r;
    }

    public function __construct($source,$hasHeader=true) {
        
        $this->f = $this->getStream($source);

        $this->hasHeader = $hasHeader;
        if ($hasHeader) $this->readHeader();
    }

    public function close() {
        fclose($this->f);
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