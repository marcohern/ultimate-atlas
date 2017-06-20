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

    private $um;
    private $tm;
    private $hasher;

    public function __construct(User $um, Token $tm, Hasher $hasher) {
        $this->middleware('api');
        
        $this->um = $um;
        $this->tm = $tm;
        $this->hasher = $hasher;
    }

    /**
    * Check if a Token Exists
    * @param $r Request object
    * @param $r.token Token String
    * @return Token
    */
    public function check_token(Request $r) {
        $token = $this->tm->getToken($r->input('token'));
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
        $user = $this->um->where('activated_token',$token)->select('id')->first();
        if (!$user) throw new NotFoundException("Token invalid.");

        $affected = $this->um->where('id',$user->id)->update([
            'activated_token' => null,
            'activated' => 'TRUE',
            
            'updated_at' => In::now()
        ]);
        $user = $this->um->view($user->id);
        Mail::to($user->email)->send(new SignupActivatedMail($user));
        return ['user' => $user];
    }

    public function signup(Request $r) {

        try {

            DB::beginTransaction();
            $user = $this->um->create([
                'username' => $r->input('username'),
                'fname' => $r->input('fname'),
                'lname' => $r->input('lname'),
                'email' => $r->input('email'),
                'gender' => $r->input('gender'),
                'birth' => $r->input('birth'),
                'role' => $r->input('role'),
                'password' => $r->input('password')
            ]);
            
            Mail::to($user->email)->send(new SignupActivateMail($user));
            DB::commit();
            
            return ['user' => $user];
        } catch(\Exception $ex) {
            DB::rollback();
            throw $ex;
        }
    }

    public function logout(Request $r) {
        try {
            $token = $this->tm->getToken($r->header('Token'));
            if ($token) {
                $this->tm->destroy($token->id);
            }
        } catch (NotFoundException $ex) {}
        return ['success' => true];
    }

    public function login(Request $r) {
        $errormsg = "Username or password invalid. Your account may require activation, check your email.";
        $username = $r->input('username');
        $password = $r->input('password');
        $user = $this->um->getLoginUserByUsername($username);
        if (!$user) {
            $user = $this->um->getLoginUserByEmail($username);
            
            if (!$user) {
                throw new UnauthorizedException($errormsg);
            }
        }

        if ($this->hasher->check($password, $user->salt, $user->password)) {
            $user = $this->um->view($user->id);
            $token = $this->tm->create($user->id);
            return ['user' => $user, 'token' => $token];
        } else {
            throw new UnauthorizedException($errormsg);
        }
    }

    public function version() {
        return config('version');
    }
}
