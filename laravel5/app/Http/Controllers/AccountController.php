<?php

namespace App\Http\Controllers;

use Mail;
use App\Exceptions\UnauthorizedException;
use App\Exceptions\NotFoundException;
use App\User;
use App\Token;
use App\Lib\Salt;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;


class AccountController extends Controller
{
    private $ssp;

    public function __construct() {
        $this->middleware('api');
        
    }

    public function generate_password(Request $r) {
        $uniqueid = Hash::make(uniqid('',true).str_random(48));
        $salt = (empty($r->input('salt'))) ? Salt::make(48) : $r->input('salt');
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
        else {
            Token::where('id',$token->id)->update([
                'expires' => (new \Datetime("now"))->add(new \DateInterval("P2D")),
                'updated_at' => new \Datetime("now")
            ]);
        }
        return ['token' => $token];
    }

    private function sendActivateSignupEmail(User $user) {
        Mail::send('emails.signup_activate', ['user' => $user], function ($m) use ($user) {
            //$m->from('sender@marcohern.com', 'Ultimate Atlas');
            
            $m->to($user->email, $user->fname.' '.$user->lname)->subject('Your Reminder!');
        });
    }

    public function signup(Request $r) {
        $salt = Salt::make(48);
        $pwd = Hash::make($salt.$r->input('password'));

        $atsource = $r->input('username').
            $r->input('email').
            $r->input('fname').
            $r->input('lname').
            Salt::make(256);
        $at = Hash::make($atsource);

        $id = 1;
        /*
        $id = User::insertGetId([
            'username' => $r->input('username'),
            'fname' => $r->input('fname'),
            'lname' => $r->input('lname'),
            'email' => $r->input('email'),
            //'gender' => $r->input('gender'),
            'birth' => $r->input('birth'),
            'role' => $r->input('role'),

            'password' => $pwd,
            'salt' => $salt,
            'activated' => 'FALSE',
            'activated_token' => $at,

            'created_at' => new \Datetime("now")
        ]);*/

        $user = User::where('id',$id)->first();

        $this->sendActivateSignupEmail($user);

        return [
            'user' => $user
        ];
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
            ->where('username', $username)
            ->where('activated', 'TRUE')
            ->first();

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
