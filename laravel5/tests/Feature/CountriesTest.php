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

    private $okToken;

    private $cm;
    private $tm;

    private $fakeCountry;
    private $fakeInputCountry;

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

        $this->okToken = [
            'id' => 9999,
            'token' => 'THIS-IS-A-WORKING-TOKEN-THIS-IS-A-WORKING-TOKEN-THIS-IS-A-WORKIN',
            'expires' => '9999-12-31 23:59:59',
            'created_at' => '2017-01-01 00:00:00',
            'updated_at' => null
        ];

        $this->fakeCountry = [
            "id" => 9999,
            "name" => "Internation",
            "iso2" => "IN",
            "currency" => "BCN",
            "lat" => "4.00971833452176",
            "lng" => "-72.74618530273430",
            "created_at" => null,
            "updated_at" => null
        ];

        $this->fakeInputCountry =  [
            "name" => "Internation",
            "iso2" => "IN",
            "currency" => "BCN",
            "lat" => "4.00971833452176",
            "lng" => "-72.74618530273430"
        ];

        $this->cm = Mockery::mock(Country::class);
        $this->tm = Mockery::mock(Token::class);

        $this->app->instance(Country::class,$this->cm);
        $this->app->instance(Token::class,$this->tm);

        $this->tm->shouldReceive('getToken')->once()->andReturn($this->okToken);
    }
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCountriesList()
    {
        $this->cm->shouldReceive('search')->once()->with('',10,0)->andReturn([ $this->fakeCountry ]);
        
        $response = $this->json('GET','/api/countries', [
            'q' => ''
        ],$this->okHeaders);
        $response->assertStatus(200);
    }

    public function testCountryView() {
        $this->cm->shouldReceive('view')->once()->with(1)->andReturn($this->fakeCountry);

        $response = $this->json('GET','/api/countries/1',[],$this->okHeaders);
        $response->assertStatus(200);
    }

    public function testCountryCreate() {
        $this->cm->shouldReceive('create')->once()->with($this->fakeInputCountry)->andReturn($this->fakeCountry);

        $response = $this->json('POST','/api/countries',$this->fakeInputCountry, $this->okHeaders);
        $response->assertStatus(200);
    }

    public function testCountryUpdate() {
        $this->cm->shouldReceive('modify')->once()->with(1,$this->fakeInputCountry)->andReturn($this->fakeCountry);

        $response = $this->json('PUT','/api/countries/1',$this->fakeInputCountry, $this->okHeaders);
        $response->assertStatus(200);
    }

    public function testCountryDelete() {
        $this->cm->shouldReceive('erase')->once()->with(1)->andReturn($this->fakeCountry);

        $response = $this->json('DELETE','/api/countries/1',[], $this->okHeaders);
        $response->assertStatus(200);
    }
}
