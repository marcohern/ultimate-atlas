<?php

require_once("Tabulator.php");

class ConsoleTabulator extends Tabulator {

    public function __construct(array $format) {
        $this->filepath = "php://stdout";
        $this->sep = ' ';
        $this->end = "\n";
        $this->format = $format;
        $this->buildFormatStrings();
    }

    public function valueFormat($type, $name, $size, $precision, $quoted) {
        $r = '%';
        if ($size!=0) $r .= $size;
        if ($precision>0) $r .=".$precision";
        $r .= $type;
        return $r;
    }

    public function headerFormat($type, $name, $size, $precision, $quoted) {
        if ($size!=0) return "%{$size}s";
        else return "%s";
    }

}