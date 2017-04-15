<?php

namespace App\Http\Controllers;

use App\Exceptions\UnauthorizedException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

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
        $token = $r->input('token');
        return [1,2,3];
    }

    public function login(Request $r) {
        $errormsg = "Username or password invalid.";
        $username = $r->input('username');
        $password = $r->input('password');

        $user = DB::table('users')
            ->select(['username','password','salt','email'])
            ->where('username', $username)->first();

        if (!$user) {
            $user = DB::table('users')
                ->select(['username','password','salt','email'])
                ->where('email', $username)->first();
            
            if (!$user) {
                throw new UnauthorizedException($errormsg);
            }
        }
        
        if (Hash::check($password.$user->salt,$user->password)) {
            return ['user' => $user, 'token' => 'XXXXXXXXXXXXXXXXXXXXXXX'];
        } else {
            throw new UnauthorizedException($errormsg);
        }
    }
}
