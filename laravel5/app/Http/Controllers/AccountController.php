<?php

namespace App\Http\Controllers;

use App\Exceptions\UnauthorizedException;
use App\Exceptions\NotFoundException;
use App\Exceptions\BadRequestException;

use App\User;
use App\Token;
use App\PasswordReset;
use App\Lib\PasswordGenerator;
use App\Lib\UrlToken;
use App\Lib\AutoRouter;
use App\Mail\SignupActivate;
use App\Mail\SignupActivated;
use App\Mail\ResetPassword;

use Mail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;


class AccountController extends Controller
{
    private $ssp;

    public function __construct() {
        $this->middleware('api');
        
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

    public function get_methods() {
        return ['methods' => AutoRouter::getMethods("App\\Http\\Controllers\\UserController")];
    }

    public function activate(Request $r) {
        $token = $r->input('token');
        $user = User::where('activated_token',$token)->select('id')->first();

        if (!$user) throw new NotFoundException("Token invalid.");

        $affected = User::where('id',$user->id)->update([
            'activated_token' => null,
            'activated' => 'TRUE',
            
            'updated_at' => new \Datetime("now")
        ]);
        $user = User::where('id', $user->id)->first();
        Mail::to($user->email)->send(new SignupActivated($user));

        return [
            'affected' => $affected,
            'activated' => true,
            'user' => $user
        ];
    }

    public function signup(Request $r) {
        $salt = PasswordGenerator::salt();
        $pwd = PasswordGenerator::hash($salt, $r->input('password'));

        $at = UrlToken::make(60);
        
        $id = User::insertGetId([
            'username' => $r->input('username'),
            'fname' => $r->input('fname'),
            'lname' => $r->input('lname'),
            'email' => $r->input('email'),
            'gender' => $r->input('gender'),
            'birth' => $r->input('birth'),
            'role' => $r->input('role'),

            'password' => $pwd,
            'salt' => $salt,
            'activated' => 'FALSE',
            'activated_token' => $at,

            'created_at' => new \Datetime("now")
        ]);

        $user = User::where('id',$id)->first();

        Mail::to($user->email)->send(new SignupActivate($user));

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
        $errormsg = "Username or password invalid. Your account may require activation, check your email.";
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
        
        if (PasswordGenerator::check($password, $user->salt, $user->password)) {
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

    public function reset_password(Request $r) {
        $token = UrlToken::make(60);
        $email = $r->input('email');
        PasswordReset::insert([
            'email' => $email,
            'token' => $token,
            'created_at' => new \Datetime("now")
        ]);
        $user = User::where('email',$email)->first();

        $pr = PasswordReset::where('email',$email)->first();

        
        Mail::to($pr->email)->send(new ResetPassword($pr, $user));

        return [
            'affected' => 1,
            'created' => true,
            'password_reset' => $pr
        ];
    }

    public function reset_password_set(Request $r) {
        $token = $r->input('token');
        $pwd = $r->input('password');
        if (empty($pwd)) throw new BadRequestException("Password required.");
        if (empty($pwd)) throw new BadRequestException("Token required.");
        $pr = PasswordReset::where('token',$token)->first();
        if (!$pr) throw new BadRequestException("Set password token not found.");
        $user = User::where('email',$pr->email)->first();
        if (!$user) throw new BadRequestException("Set password token email not found.");

        $salt = PasswordGenerator::salt();
        $password = PasswordGenerator::hash($salt, $r->input('password'));

        $af = User::where('id', $user->id)->update([
            'password' => $password,
            'salt' => $salt,
            'activated' => 'TRUE',
            'updated_at' => new \Datetime("now")
        ]);

        $afp = PasswordReset::where('token',$token)->delete();

        $updatedUser = User::where('id',$user->id)->first();
        return [
            'affected' => $af,
            'pasword_set' => true,
            'deleted' => $afp,
            'user' => $updatedUser
        ];
    }
}
