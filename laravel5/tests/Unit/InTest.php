<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Lib\In;

class InTest extends TestCase
{
    public function testNow() {
        $now = In::now();
        $this->assertTrue(true,"In::now must run propperly");
    }

    public function testDays() {
        $days = In::days(3);
        $this->assertTrue(true,"In::days must run propperly");
    }

    public function testLoginTokenPeriod() {
        $days = In::loginTokenPeriod();
        $this->assertTrue(true,"In::loginTokenPeriod must run propperly");
    }

    public function testPasswordResetTokenPeriod() {
        $days = In::passwordResetTokenPeriod();
        $this->assertTrue(true,"In::passwordResetTokenPeriod must run propperly");
    }

    public function testLastDate() {
        $lastDate = In::lastDate();
        $this->assertTrue(true,"In::testLastDate must run propperly");
    }
}
