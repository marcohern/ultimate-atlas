<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Exceptions\NotFoundException;
use App\Models\State;
use App\Models\Token;
use Mockery;

class StatesTest extends TestCase
{
    private $okHeaders;
    private $failHeaders;

    private $okToken;

    private $sm;
    private $tm;

    private $fakeState;
    private $fakeInputState;

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

        $this->fakeState = [
            "id" => 9999,
            "name" => "Interstate",
            "country_id" => 9999,
            "lat" => "4.00971833452176",
            "lng" => "-72.74618530273430",
            "created_at" => '2017-01-01 00:00:00',
            "updated_at" => '2017-01-03 00:00:00'
        ];

        $this->fakeInputState =  [
            "name" => "Interstate",
            "country_id" => 9999,
            "lat" => "4.00971833452176",
            "lng" => "-72.74618530273430",
        ];

        $this->sm = Mockery::mock(State::class);
        $this->tm = Mockery::mock(Token::class);

        $this->app->instance(State::class,$this->sm);
        $this->app->instance(Token::class,$this->tm);

        $this->tm->shouldReceive('getToken')->once()->andReturn($this->okToken);
    }
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testStateList()
    {
        $this->sm->shouldReceive('search')->once()->with(1,'',10,0)->andReturn([ $this->fakeState ]);
        
        $response = $this->json('GET','/api/states', [
            'country_id' => 1,
            'name' => '',
            'l' => 10,
            'o'=>0
        ],$this->okHeaders);
        $response->assertStatus(200);
    }

    public function testStateView() {
        $this->sm->shouldReceive('view')->once()->with(1)->andReturn($this->fakeState);

        $response = $this->json('GET','/api/states/1',[],$this->okHeaders);
        $response->assertStatus(200);
    }

    public function testStateCreate() {
        $this->sm->shouldReceive('create')->once()->with($this->fakeInputState)->andReturn($this->fakeState);

        $response = $this->json('POST','/api/states',$this->fakeInputState, $this->okHeaders);
        $response->assertStatus(200);
    }

    public function testStateUpdate() {
        $this->sm->shouldReceive('modify')->once()->with(1,$this->fakeInputState)->andReturn($this->fakeState);

        $response = $this->json('PUT','/api/states/1',$this->fakeInputState, $this->okHeaders);
        $response->assertStatus(200);
    }

    public function testStateDelete() {
        $this->sm->shouldReceive('erase')->once()->with(1)->andReturn($this->fakeState);

        $response = $this->json('DELETE','/api/states/1',[], $this->okHeaders);
        $response->assertStatus(200);
    }
}
