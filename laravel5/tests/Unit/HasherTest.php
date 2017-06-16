<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Lib\Hasher;

class HasherTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->assertTrue(true);
    }

    public function testUniqueLen() {
        $len = 64;
        $hash = Hasher::unique($len);
        $this->assertTrue(strlen($hash) == $len,"hash length must be equal to specified length");
    }

    public function testRandomLen() {
        $len = 64;
        $rand = Hasher::random($len);
        $this->assertTrue(strlen($rand) == $len,"rand length must be equal to specified length");
    }

    public function testTokenLen() {
        $len = 64;
        $token = Hasher::token();
        $this->assertTrue(strlen($token) == $len,"token length must be equal to specified length");
    }

    public function testSaltLen() {
        $len = 48;
        $salt = Hasher::salt();
        $this->assertTrue(strlen($salt) == $len,"salt length must be equal to specified length");
    }

    public function testPasswordHash() {
        $salt = '123456';
        $password = 'password';
        $hash = Hasher::password($salt, $password);
        $this->assertTrue(!empty($hash),"Password must be hashed");
    }

    public function testCheck() {
        $salt = '123456';
        $password = 'password';
        $hash = '$2y$10$wNXxO9HWnaGZ.ggvYKcfAuOsRCFmSyxSP9f2qwBPu/97z2OIxu6/y';
        $this->assertTrue(Hasher::check($password,$salt, $hash),"Password check must pass");
    }
}
