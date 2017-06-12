<?php

require_once("constants.php");
require_once("Tabulator.php");

class CsvTabulator extends Tabulator {

    public function __construct(array $format, $filepath) {
        $this->filepath = $filepath;
        $this->sep = ',';
        $this->end = "\n";
        $this->format = $format;
        $this->buildFormatStrings();
    }

    public function valueFormat($type, $name, $size, $precision, $quoted) {
        if ($quoted) return "\"%$type\"";
        return "%$type";
    }

    public function headerFormat($type, $name, $size, $precision, $quoted) {
        return "%s";
    }
}