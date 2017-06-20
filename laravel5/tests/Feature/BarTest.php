<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Mockery;

class BarTest extends TestCase
{
    private $okHeaders;
    private $hasher;
    private $slugger;
    private $bm;
    private $tm;
    private $imm;


    public function setup() {
        parent::setup();

        $token = 'THIS-IS-A-FAKE-TOKEN-THIS-IS-A-FAKE-TOKEN-THIS-IS';
        $this->okHeaders = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Token' => $token
        ];

        $this->bm  = Mockery::mock(\App\Bars\Bar::class);
        $this->tm  = Mockery::mock(\App\Models\Token::class);
        $this->imm = Mockery::mock(\App\Models\Image::class);

        $this->app->instance(\App\Bars\Bar::class,$this->bm);
        $this->app->instance(\App\Models\Token::class,$this->tm);
        $this->app->instance(\App\Models\Image::class,$this->imm);

        $this->tm->shouldReceive('getToken')->once()->andReturn($token);
    }
    
    public function testIndex()
    {
        $this->bm->shouldReceive('search')
            ->with(1,'','1990-01-01 00:00:00',10,0)
            ->once()
            ->andReturn([
                [
                    'id' => 9998,
                    'username' => 'user1',
                    'fname' => 'User',
                    'lname' => 'One'
                ],
                [
                    'id' => 9999,
                    'username' => 'user2',
                    'fname' => 'User',
                    'lname' => 'Two'
                ]
            ]);

        
        $response = $this->json('GET','/api/bars',[
            'city_id' => 1,
            'q'=>'',
            'modified' => '1990-01-01 00:00:00',
            'l'=>10,
            'o'=>0
        ],$this->okHeaders);

        //$c = $response->getContent();//json_decode($response->getContent());
        //unset($c->error->trace);
        //print_r($c);
        $response->assertStatus(200);
    }

    public function testCreate() {
        
        $bar = [
            'id' => 2,
            'name' => 'Bar Name',
            'description' => 'Bar Description.',
            'city_id' => 1234,
            'user_id' => 9999,
            'type' => 'bar',
            'address' => '123 Random St.',
            'zip' => '123456',
            'lat' =>   4.5678901,
            'lng' => -74.5678901,
            'email' => 'bar@mail.com',
            'phone1' => '(57) 1 234 5678',
            'phone2' => '',
            'mobile' => '',
            'website' => 'http://bar.com',
            'contact_name' => 'Barmus Contactus',

            'images' => '1,2,3,4,5,6,7,8',
            
            'franhise_id' => null,
            'plan' => 'copper',
            'avg_price' => 0.0,
            'cover' => 10000.0,
            'color' => 'RED',
            'lat_ne' =>   4.5678801,
            'lng_ne' => -74.5678801,
            'lat_sw' =>   4.5679001,
            'lng_sw' => -74.5679001
        ];
        $this->bm->shouldReceive('create')
            //->with($bar)
            ->once()
            ->andReturn($bar);

        $response = $this->json('POST','/api/bars',$bar,$this->okHeaders);
        $response->assertJson([
            'name' => true,
            'description' => true
        ]);
        $response->assertStatus(200);
    }

    public function testView() {

        $bar = [
            'id' => 9999,
            'name' => 'Bar Name',
            'slug' => 'bar-name',
            'description' => 'Bar Description'
        ];
        $this->bm->shouldReceive('view')
            ->with(1, 'cover', 'ldpi', 'http://localhost')->once()
            ->andReturn($bar);


        $response = $this->json('GET','/api/bars/1',[
            'p' => 'cover',
            'd' => 'ldpi'
        ],$this->okHeaders);
        $response->assertJson([
            'name' => true,
            'description' => true
        ]);
        $response->assertStatus(200);
    }

    public function testUpdate() {
        $bar = [
            'id' => 2,
            'name' => 'Bar Name',
            'description' => 'Bar Description.',
            'city_id' => 1234,
            'user_id' => 9999,
            'type' => 'bar',
            'address' => '123 Random St.',
            'zip' => '123456',
            'lat' =>   4.5678901,
            'lng' => -74.5678901,
            'email' => 'bar@mail.com',
            'phone1' => '(57) 1 234 5678',
            'phone2' => '',
            'mobile' => '',
            'website' => 'http://bar.com',
            'contact_name' => 'Barmus Contactus',

            'images' => '1,2,3,4,5,6,7,8',
            
            'franhise_id' => null,
            'plan' => 'copper',
            'avg_price' => 0.0,
            'cover' => 10000.0,
            'color' => 'RED',
            'lat_ne' =>   4.5678801,
            'lng_ne' => -74.5678801,
            'lat_sw' =>   4.5679001,
            'lng_sw' => -74.5679001
        ];

        $this->bm->shouldReceive('modify')
            //->with('2', $bar)
            ->once()
            ->andReturn($bar);
            
        $response = $this->json('PUT','/api/bars/2',$bar,$this->okHeaders);
        $response->assertJson([
            'name' => true,
            'description' => true
        ]);
        $response->assertStatus(200);
    }

    public function testDelete() {
        $bar = [
            'id' => 1,
            'name' => 'Bar Name',
            'description' => 'Bar Description.',
            'city_id' => 1234,
            'user_id' => 9999,
            'type' => 'bar',
            'address' => '123 Random St.',
            'zip' => '123456',
            'lat' =>   4.5678901,
            'lng' => -74.5678901,
            'email' => 'bar@mail.com',
            'phone1' => '(57) 1 234 5678',
            'phone2' => '',
            'mobile' => '',
            'website' => 'http://bar.com',
            'contact_name' => 'Barmus Contactus',

            'images' => '1,2,3,4,5,6,7,8',
            
            'franhise_id' => null,
            'plan' => 'copper',
            'avg_price' => 0.0,
            'cover' => 10000.0,
            'color' => 'RED',
            'lat_ne' =>   4.5678801,
            'lng_ne' => -74.5678801,
            'lat_sw' =>   4.5679001,
            'lng_sw' => -74.5679001
        ];

        $this->bm->shouldReceive('erase')
            ->with('1')->once()
            ->andReturn($bar);

        $response = $this->json('DELETE','/api/bars/1',[],$this->okHeaders);
        $response->assertJson([
            'name' => true,
            'description' => true
        ]);
        $response->assertStatus(200);
    }
}
