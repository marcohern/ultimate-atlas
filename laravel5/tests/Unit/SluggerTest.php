<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Lib\Slugger;

class SluggerTest extends TestCase
{
    public function testSlugify() {
        $input = "Test Slugify!";
        $output = "test-slugify";
        $this->assertTrue(Slugger::slugify($input)===$output,"$input ==> $output");
    }

    public function testSlugifySingleQuote() {
        $input = "Guns n' Roses";
        $output = "guns-n-roses";
        $this->assertTrue(Slugger::slugify($input)===$output,"$input ==> $output");
    }

    public function testSlugifyTrimSpaces() {
        $input = "   John     Malcovich  ";
        $output = "john-malcovich";
        $this->assertTrue(Slugger::slugify($input)===$output,"$input ==> $output");
    }

    public function testSlugifyAccents() {
        $input = "áéíóúüñç";
        $output = "aeiouunc";
        $this->assertTrue(Slugger::slugify($input)===$output,"$input ==> $output");
    }

    public function testSlugifyAmpersand() {
        $input = "Crepes & Waffles";
        $output = "crepes-waffles";
        $this->assertTrue(Slugger::slugify($input)===$output,"$input ==> $output");
    }

    public function testSlugifySlashes() {
        $input = "1/4 + 2/4 = 3/4";
        $output = "1-4-2-4-3-4";
        $this->assertTrue(Slugger::slugify($input)===$output,"$input ==> $output");
    }

    public function testSlugifyBackslashes() {
        $input = "1\\4 + 2\\4 != 3\\4";
        $output = "14-24-34";
        $this->assertTrue(Slugger::slugify($input)===$output,"$input ==> $output");
    }
}
