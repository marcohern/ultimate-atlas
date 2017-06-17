<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AccountTest extends TestCase
{
    private $okHeaders;
    private $tm;

    public function setup() {
        parent::setup();

        $this->okHeaders = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json'
        ];
        
        $this->tm = Mockery::mock(Token::class);
    }
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testLogin()
    {
        $this->assertTrue(true);
    }
}
