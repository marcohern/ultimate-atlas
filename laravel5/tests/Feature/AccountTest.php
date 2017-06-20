<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Mockery;

use App\Mail\SignupActivateMail;
use App\Lib\Hasher;
use App\Models\Token;
use App\Models\User;
use Mail;

class AccountTest extends TestCase
{
    private $okHeaders;
    private $tm;
    private $um;

    private $johnDoeLogin;
    private $johnDoe;
    private $fakeToken;

    public function setup() {
        parent::setup();

        $this->okHeaders = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json'
        ];

        $this->weakHeaders = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Token' => 'THIS-IS-A-FAKE-TOKEN-THIS-IS-A-FAKE-TOKEN-THIS-IS'
        ];

        $this->johnDoeLogin = (object) [
            'id' => 9999,
            'username' => 'johndoe',
            'password' => 'ENCRYPTED_PASSWORD',
            'salt' => 'generated-salt',
            'email' => 'johndoe@mail.com'
        ];

        $this->johnDoeInput = (object) [
            'username' => 'johndoe',
            'email' => 'johndoe@mail.com',
            'fname' => 'John',
            'lname' => 'Doe',
            'gender' => 'M',
            'birth' => '1980-10-15'
        ];

        $this->johnDoe = (object) [
            'id' => 9999,
            'username' => 'johndoe',
            'email' => 'johndoe@mail.com',
            'fname' => 'John',
            'lname' => 'Doe',
            'gender' => 'M',
            'birth' => '1980-10-15'
        ];
        $this->fakeToken = (object)[
            'id' => 9999,
            'token' => 'THIS-IS-A-WORKING-TOKEN-THIS-IS-A-WORKING-TOKEN-THIS-IS-A-WORKIN',
            'expires' => '9999-12-31 23:59:59',
            'expired' => false
        ];
        
        $this->hasher = Mockery::mock(Hasher::class);
        $this->tm = Mockery::mock(Token::class);
        $this->um = Mockery::mock(User::class);

        $this->app->instance(Hasher::class,$this->hasher);
        $this->app->instance(User::class,$this->um);
        $this->app->instance(Token::class,$this->tm);
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testLoginUsername()
    {
        $this->um->shouldReceive('getLoginUserByUsername')
            ->once()->with('johndoe')
            ->andReturn($this->johnDoeLogin);
        $this->um->shouldNotReceive('getLoginUserByEmail');

        $this->hasher->shouldReceive('check')->once()
            ->with('typed-password', 'generated-salt', 'ENCRYPTED_PASSWORD')
            ->andReturn(true);

        $this->um->shouldReceive('view')->once()->with(9999)->andReturn($this->johnDoe);
        $this->tm->shouldReceive('create')->once()->with(9999)->andReturn($this->fakeToken);

        $response = $this->json('POST','/api/login', [
            'username' => 'johndoe',
            'password' => 'typed-password'
        ],$this->okHeaders);
        $response->assertJson([
            'user' => [
                'id' => true,
                'username' => true,
                'email' => true,
                'fname' => true,
                'lname' => true
            ],
            'token' => [
                'id' => true,
                'token' => true,
                'expires' => true
            ]
        ]);
        $response->assertStatus(200);
    }

    public function testLoginEmail() {
        $this->um->shouldReceive('getLoginUserByUsername')
            ->once()->with('johndoe@mail.com')
            ->andReturn(null);
        $this->um->shouldReceive('getLoginUserByEmail')
            ->once()->with('johndoe@mail.com')
            ->andReturn($this->johnDoeLogin);
        
        $this->hasher->shouldReceive('check')->andReturn(true);

        $this->um->shouldReceive('view')->once()->with(9999)->andReturn($this->johnDoe);
        $this->tm->shouldReceive('create')->once()->with(9999)->andReturn($this->fakeToken);

        $response = $this->json('POST','/api/login', [
            'username' => 'johndoe@mail.com',
            'password' => 'typed-password'
        ],$this->okHeaders);
        $response->assertStatus(200);
        $response->assertJson([
            'user' => [
                'id' => true,
                'username' => true,
                'email' => true,
                'fname' => true,
                'lname' => true
            ],
            'token' => [
                'id' => true,
                'token' => true,
                'expires' => true
            ]
        ]);
    }

    public function testLoginUsernameNotFound() {

        $this->um->shouldReceive('getLoginUserByUsername')
            ->with('non-existent')->once()->andReturn(null);
        $this->um->shouldReceive('getLoginUserByEmail')
            ->with('non-existent')->once()->andReturn(null);
        
        $this->hasher->shouldNotReceive('check');
        $this->um->shouldNotReceive('view');
        $this->tm->shouldNotReceive('create');

        $response = $this->json('POST','/api/login', [
            'username' => 'non-existent',
            'password' => 'whatever'
        ],$this->okHeaders);
        $response->assertStatus(401);
    }

    public function testLoginPasswordDoesNotMatch() {

        $this->um->shouldReceive('getLoginUserByUsername')
            ->with('johndoe')->once()->andReturn($this->johnDoeLogin);
        
        $this->um->shouldNotReceive('getLoginUserByEmail');

        $this->hasher->shouldReceive('check')->once()
            ->with('no-matching-password','generated-salt','ENCRYPTED_PASSWORD')->andReturn(false);
        $this->um->shouldNotReceive('view');
        $this->tm->shouldNotReceive('create');

        $response = $this->json('POST','/api/login', [
            'username' => 'johndoe',
            'password' => 'no-matching-password'
        ],$this->okHeaders);
        $response->assertJson([
            'error' => [
                'message' => true,
                'httpCode' => 401
            ]
        ]);
        $response->assertStatus(401);
    }

    public function testLogout() {
        $this->okHeaders['Token'] = 'THIS-IS-A-TOKEN';

        $this->tm->shouldReceive('getToken')->once()->with('THIS-IS-A-TOKEN')->andReturn($this->fakeToken);
        $this->tm->shouldReceive('destroy')->once()->with(9999);
        $response = $this->json('POST','/api/logout', [], $this->okHeaders);
        $response->assertExactJson([
            'success' => true
        ]);
        $response->assertStatus(200);
    }

    public function testLogoutNoToken() {

        $this->tm->shouldReceive('getToken')->once()->with(null)->andReturn(null);
        $this->tm->shouldNotReceive('destroy');
        $response = $this->json('POST','/api/logout', [], $this->okHeaders);
        $response->assertExactJson([
            'success' => true
        ]);
        $response->assertStatus(200);
    }

    public function testSignup() {
        Mail::fake();

        $this->johnDoe->activated_token = "ACTIVATED_TOKEN";
        $this->johnDoe->activated = "FALSE";
        $this->um->shouldReceive('create')
            //->with($this->johnDoeInput)
            ->once()
            ->andReturn($this->johnDoe);

        $this->hasher->shouldReceive('random')->once()
            ->with(16)
            ->andReturn('RANDOM_STRING');

        $user = [
            'username' => 'johndoe',
            'email' => 'johndoe@mail.com',
            'fname' => 'John',
            'lname' => 'Doe',
            'gender' => 'M',
            'birth' => '1980-10-15'
        ];
        /*
        $ou = (object) $user;
        Mail::assertSent(SignupActivateMail::class, function($mail) use ($ou) {
            return true;// $mail->hasTo('johndoe@mail.com');
        });*/

        $response = $this->json('POST','/api/signup', $user, $this->okHeaders);
        $response->assertJson([
            'user' => true
        ]);
        $response->assertStatus(200);
    }
}
