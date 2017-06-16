<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Lib\CsvReader;
use App\Lib\CsvReaderException;

class CsvReaderTest extends TestCase
{
    public function testCsvReader()
    {
        $table 
            ="name,gender,age\n"
            ."John,M,32\n";
        $fs = fopen("data://text/plain,".$table,'r');

        $csv = new CsvReader($fs, true);
        $row = $csv->read();
        $csv->close();
        $this->assertTrue(!empty($row),"Read row must not be empty");
        $this->assertTrue($row['name']   === 'John',"name must be John");
        $this->assertTrue($row['gender'] === 'M'   ,"gender must be M");
        $this->assertTrue($row['age']    === '32'  ,"Age must be 32");
    }

    public function testCsvReaderNoAssoc()
    {
        $table 
            ="name,gender,age\n"
            ."John,M,32\n";
        $fs = fopen("data://text/plain,".$table,'r');

        $csv = new CsvReader($fs, false);
        $row = $csv->read();
        
        $this->assertTrue(!empty($row),"Read row must not be empty");
        $this->assertTrue($row[0] === 'name'  ,"0 must be name");
        $this->assertTrue($row[1] === 'gender',"1 must be gender");
        $this->assertTrue($row[2] === 'age'   ,"2 must be age");

        $row = $csv->read();

        $this->assertTrue(!empty($row),"Read row must not be empty");
        $this->assertTrue($row[0] === 'John' ,"0 must be John");
        $this->assertTrue($row[1] === 'M'    ,"1 must be M");
        $this->assertTrue($row[2] === '32'   ,"2 must be 32");

        $csv->close();
        $this->assertTrue(true,"Close propperly");
    }

    public function testCsvReaderSourceInvalid() {
        try {
            $csv = new CsvReader(45, true);
            $this->assertTrue(false,"The source should be invalid");
        } catch (CsvReaderException $ex) {
            $this->assertTrue(true,$ex->getMessage());
        }
    }

    public function testCsvReaderFileDoesNotExist() {
        try {
            $csv = new CsvReader(storage_path("nonexistent.file"), true);
            $csv->close();
            $this->assertTrue(false,"The file should not exists");
        } catch (CsvReaderException $ex) {
            $this->assertTrue(true,$ex->getMessage());
        }
    }

    public function testCsvReaderReadBatch() {
        $table 
            ="name,gender,age\n"
            ."Hugo,M,12\n"
            ."Paco,M,11\n"
            ."Luis,M,13\n"
            ."Daisy,F,34\n";
        $fs = fopen("data://text/plain,".$table,'r');

        $csv = new CsvReader($fs, true);
        $rows = $csv->readBatch(3);
        $this->assertTrue(count($rows)===3,"Read rows must be 3");
        $rows = $csv->readBatch(3);
        $this->assertTrue(count($rows)===1,"Read rows must be 3, but only one left, so it's one");
        $csv->close();
        $this->assertTrue(true,"Close propperly");
    }

    public function testCsvReaderReadAll() {
        $table 
            ="name,gender,age\n"
            ."Hugo,M,12\n"
            ."Paco,M,11\n"
            ."Luis,M,13\n"
            ."Daisy,F,34\n";

        $fs = fopen("data://text/plain,".$table,'r');

        $csv = new CsvReader($fs, true);
        $rows = $csv->readAll();
        $this->assertTrue(count($rows)===4,"Read rows must be 4");
    }
}
