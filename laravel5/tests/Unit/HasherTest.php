<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Lib\Hasher;

class HasherTest extends TestCase
{
    private $hasher;

    public function setup() {
        parent::setup();
        $this->hasher = new Hasher();
    }

    public function testUniqueLen() {
        
        $len = 64;
        $hash = $this->hasher->unique($len);
        $this->assertTrue(strlen($hash) == $len,"hash length must be equal to specified length");
    }

    public function testRandomLen() {
        $len = 64;
        $rand = $this->hasher->random($len);
        $this->assertTrue(strlen($rand) == $len,"rand length must be equal to specified length");
    }

    public function testTokenLen() {
        $len = 64;
        $token = $this->hasher->token();
        $this->assertTrue(strlen($token) == $len,"token length must be equal to specified length");
    }

    public function testSaltLen() {
        $len = 48;
        $salt = $this->hasher->salt();
        $this->assertTrue(strlen($salt) == $len,"salt length must be equal to specified length");
    }

    public function testPasswordHash() {
        $salt = '123456';
        $password = 'password';
        $hash = $this->hasher->password($salt, $password);
        $this->assertTrue(!empty($hash),"Password must be hashed");
    }

    public function testCheck() {
        $salt = '123456';
        $password = 'password';
        $hash = '$2y$10$wNXxO9HWnaGZ.ggvYKcfAuOsRCFmSyxSP9f2qwBPu/97z2OIxu6/y';
        $this->assertTrue($this->hasher->check($password,$salt, $hash),"Password check must pass");
    }
}
