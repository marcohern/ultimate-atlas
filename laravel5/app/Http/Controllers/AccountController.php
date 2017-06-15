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

    /**
    * Check if a Token Exists
    * @param $r Request object
    * @param $r.token Token String
    * @return Token
    */
    public function check_token(Request $r) {
        $token = Token::getToken($r->input('token'));
        return $token;
    }

    /**
    * Activates a recently created User account.
    * Sends and email indicating that the user has been activated.
    * @param $r Request object
    * @param $r.token Activation token, the one sent on email.
    * @return User user info
    */
    public function activate(Request $r) {
        $token = $r->input('token');
        $user = User::where('activated_token',$token)->select('id')->first();
        if (!$user) throw new NotFoundException("Token invalid.");

        $affected = User::where('id',$user->id)->update([
            'activated_token' => null,
            'activated' => 'TRUE',
            
            'updated_at' => In::now()
        ]);
        $user = User::get($user->id);
        Mail::to($user->email)->send(new SignupActivatedMail($user));
        return $user;
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
        try {
            $token = Token::getToken($r->header('Token'));
            if ($token) {
                Token::destroy($token->id);
            }
        } catch (NotFoundException $ex) {}
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
            $user = User::get($user->id);
            $token = Token::create($user->id);
            return ['user' => $user, 'token' => $token];
        } else {
            throw new UnauthorizedException($errormsg);
        }
    }
}
