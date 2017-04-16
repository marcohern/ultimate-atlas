<?php

namespace App\Http\Controllers;

use App\Exceptions\UnauthorizedException;
use App\Exceptions\NotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Token;

class AccountController extends Controller
{
    public function __construct() {
        $this->middleware('api');
    }

    private function genSalt($size) {
        $tpl = "abcdefghijlkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#&%()[]{}!?";
        $n = strlen($tpl);
        $r = "";
        for ($i=0; $i<$size; $i++) {
            $index = rand(0, $n-1);
            $r .= $tpl[$index];
        }
        return $r;
    }

    public function generate_password(Request $r) {
        $uniqueid = Hash::make(uniqid('',true).str_random(48));
        $salt = (empty($r->input('salt'))) ? $this->genSalt(48) : $r->input('salt');
        $pwd = $r->input('pwd');
        return [
            'password' => $pwd,
            'salt' => $salt,
            'hashed' => Hash::make($pwd.$salt),
            'uniqueid' => $uniqueid
        ];
    }

    public function check_token(Request $r) {
        $token = Token::where('token', $r->input('token'))
            ->where('expired', 'false')
            ->first();
        if (!$token) throw new NotFoundException("Token not found.");
        return ['token' => $token];
    }

    public function logout(Request $r) {
        $token = Token::where('token', $r->input('token'))
            ->where('expired', 'false')
            ->first();
        if ($token) {
            Token::where('id',$token->id)->delete();
        }
        return ['success' => true];
    }

    public function login(Request $r) {
        $errormsg = "Username or password invalid.";
        $username = $r->input('username');
        $password = $r->input('password');

        $user = User::select(['username','password','salt','email','fname','lname'])
            ->where('username', $username)->first();

        if (!$user) {
            $user =User::select(['username','password','salt','email'])
                ->where('email', $username)->first();
            
            if (!$user) {
                throw new UnauthorizedException($errormsg);
            }
        }
        
        if (Hash::check($password.$user->salt,$user->password)) {
            $uniqueid = Hash::make(uniqid('',true).str_random(48));
            $id = Token::insertGetId([
                'token' => $uniqueid,
                'expires' => (new \Datetime("now"))->add(new \DateInterval("P2D")),
                'created_at' => new \Datetime("now")
            ]);

            $token = Token::where('id', $id)->first();
            return ['user' => $user, 'token' => $token];
        } else {
            throw new UnauthorizedException($errormsg);
        }
    }
}
