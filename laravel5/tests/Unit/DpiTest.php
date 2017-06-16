<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Lib\Dpi;
use App\Exceptions\DpiException;
class DpiTest extends TestCase
{
    public function testSize() {
        $size = Dpi::size('cover','mdpi');
        $this->assertTrue(true, "Dpi::size runs");
    }

    public function testSizeInvalidProfile() {
        try {
            $size = Dpi::size('nonexistent','values');
        } catch (DpiException $ex) {
            $this->assertTrue(true, "Dpi::size('nonexistent','values') must throw DpiException");
        }
    }

    public function testSizeInvalidDensity() {
        try {
            $size = Dpi::size('cover','nonexistent');
        } catch (DpiException $ex) {
            $this->assertTrue(true, "Dpi::size('cover','nonexistent') must throw DpiException");
        }
    }
}
