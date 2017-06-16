<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use Illuminate\Support\Facades\DB;
use App\Models\Country;
use App\Models\Token;
use Mockery;

class CountriesTest extends TestCase
{
    private $okHeaders;
    private $failHeaders;

    public function setup() {
        parent::setup();

        $this->okHeaders = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Token' => 'THIS-IS-A-WORKING-TOKEN-THIS-IS-A-WORKING-TOKEN-THIS-IS-A-WORKIN'
        ];

        $this->failHeaders = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Token' => 'THIS-IS-A-FAKE-TOKEN-THIS-IS-A-FAKE-TOKEN-THIS-IS-A-FAKE-TOKEN-T'
        ];
    }
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCountries()
    {
        $country = Mockery::mock(Country::class);
        $token = Mockery::mock(Token::class);
        $country->shouldReceive('get')->once()->andReturn([]);
        $token->shouldReceive('getToken')->once()->andReturn([
            'id' => 1,
            'token' => 'THIS-IS-A-WORKING-TOKEN-THIS-IS-A-WORKING-TOKEN-THIS-IS-A-WORKIN'
        ]);
        $this->app->instance(Country::class,$country);
        $this->app->instance(Token::class,$token);
        $response = $this->json('GET','/api/countries',[],$this->okHeaders);
        $response->assertStatus(200);
        
    }
}
