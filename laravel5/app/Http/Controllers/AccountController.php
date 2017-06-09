<?php

namespace App\Http\Controllers;

use App\Exceptions\UnauthorizedException;
use App\Exceptions\NotFoundException;
use App\Exceptions\BadRequestException;

use App\Models\User;
use App\Models\Token;
use App\Models\PasswordReset;
use App\Lib\Hasher;
use App\Lib\In;
use App\Lib\AutoRouter;
use App\Mail\SignupActivateMail;
use App\Mail\SignupActivatedMail;
use App\Mail\ResetPasswordMail;

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
                'expires' => In::loginTokenPeriod(),
                'updated_at' => In::now()
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
            
            'updated_at' => In::now()
        ]);
        $user = User::where('id', $user->id)->first();
        Mail::to($user->email)->send(new SignupActivatedMail($user));

        return [
            'affected' => $affected,
            'activated' => true,
            'user' => $user
        ];
    }

    public function signup(Request $r) {
        $salt = Hasher::salt();
        $pwd = Hasher::password($salt, $r->input('password'));

        $at = Hasher::token();
        
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

            'created_at' => In::now()
        ]);

        $user = User::where('id',$id)->first();

        Mail::to($user->email)->send(new SignupActivateMail($user));

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

        $user = User::select(['id','username','password','salt','email'])
            ->where('username', $username)
            ->where('activated', 'TRUE')
            ->first();

        if (!$user) {
            $user =User::select(['id','username','password','salt','email'])
                ->where('email', $username)
                ->where('activated', 'TRUE')
                ->first();
            
            if (!$user) {
                throw new UnauthorizedException($errormsg);
            }
        }
        
        if (Hasher::check($password, $user->salt, $user->password)) {
            $uniqueid = Hasher::token();
            $id = Token::insertGetId([
                'token' => $uniqueid,
                'user_id' => $user->id,
                'expires' => In::loginTokenPeriod(),
                'created_at' => In::now()
            ]);
            $user = User::get($user->id);
            $token = Token::where('id', $id)->first();
            return ['user' => $user, 'token' => $token];
        } else {
            throw new UnauthorizedException($errormsg);
        }
    }
}
