<?php

class Tabulator {
    private $format = [];
    private $oformat = [];

    private $vf = '';
    private $hf = '';
    private $csvf = '';
    private $csvhf = '';
    private $header = [];
    private $oheader = [];
    private $hide = [];
    private $f;

    private $cnt=0;
    private $fs;

    public static function integer($name, $size=0) {
        //echo "...integer:$name\n";
        return ['d',$name,$size,0,false];
    }

    public static function string($name, $size=0,$quoted=true) {
        //echo "...string:$name\n";
        return ['s',$name,$size,0,$quoted];
    }

    public static function decimal($name, $size=0, $precision=0) {
        //echo "...decimal:$name\n";
        return ['f',$name,$size,$precision,false];
    }


    private static function valueFormat(array $f) {
        $type = $f[0];
        $name = $f[1];
        $size = $f[2];
        $precision = $f[3];

        if ($size!=0) {
            if ($precision>=0) {
                return "%{$size}{$type}";
            } else {
                return "%{$size}.{$precision}{$type}";
            }
        } else {
            if ($precision>=0) {
                return "%{$size}.{$precision}{$type}";
            } else {
                return "%$type";
            }
        }
    }

    private static function headerFormat(array $f) {
        $size = abs($f[2]);
        return "%-{$size}s";
    }

    private static function csvFormat(array $f) {
        $type = $f[0];
        $quoted = $f[4];
        if ($quoted) return "\"%{$type}\"";
        return "%{$type}";
    }

    private static function csvHeaderFormat(array $f) {
        return "%s";
    }

    private function buildFormatStrings() {
        $this->vf = '';
        $this->hf = '';
        $this->csvf = '';
        $this->csvhf = '';

        $i=0;
        $this->header = [];
        foreach($this->format as $f) {
            $this->header[$i] = $f[1];
            $this->csvf  .= (($i==0) ? '' : ',').self::csvFormat($f);
            $this->csvhf .= (($i==0) ? '' : ',').self::csvHeaderFormat($f);
            $i++;
        }

        $i=0;
        $this->oheader = [];
        foreach($this->oformat as $f) {
            $this->oheader[$i] = $f[1];
            $this->vf    .= (($i==0) ? '' : ' ').self::valueFormat($f);
            $this->hf    .= (($i==0) ? '' : ' ').self::headerFormat($f);
            $i++;
        }
    }

    public function debug() {
        echo "..Tabulator::CSVformats:\n";
        foreach ($this->format as $f) {
            printf("%c %-12s %2d %2d %2d : %4s : %4s\n",$f[0],$f[1],$f[2],$f[3],$f[4], self::csvFormat($f), self::csvHeaderFormat($f));
        }

        echo "..Tabulator::OUTformats:\n";
        foreach ($this->oformat as $f) {
            printf("%c %-12s %2d %2d %2d : %4s : %4s\n",$f[0],$f[1],$f[2],$f[3],$f[4], self::valueFormat($f), self::headerFormat($f));
        }
    }

    public function __construct(array $format, array $hide = []) {
        $this->format = $format;
        $this->oformat = [];
        foreach ($hide as $h) {
            $this->hide[$h] = true;
        }
        $i=0;
        foreach ($this->format as $f) {
            if (array_key_exists($f[1],$this->hide)) continue;
            $this->oformat[$i] = $f;
            $i++;
        }
        $this->buildFormatStrings();
    }

    public function formattedHeader() {
        $line = vsprintf($this->hf."\n", $this->oheader);
        $i=0;
        foreach ($this->oformat as $f) {
            if ($i>0) $line .= " ";
            $size = abs($f[2]);
            for ($j=0;$j<$size;$j++) {
                $line .= "-";
            }
            $i++;
        }
        $line .= "\n";
        return $line;
    }

    public function cvsHeader() {
        return vsprintf($this->csvhf."\n", $this->header);
    }

    public function formattedValues($row) {
        return vsprintf($this->vf."\n", $row);
    }

    public function csvValues($row) {
        return vsprintf($this->csvf."\n", $row);
    }

    public function openCsv($filepath) {
        $this->f = fopen($filepath,"w");
    }

    public function closeCsv() {
        fclose($this->f);
    }

    public function writeCsv($row) {
        fwrite($this->f, $this->csvValues($row));
    }

    public function writeCsvHeader() {
        fwrite($this->f, $this->cvsHeader());
    }
}