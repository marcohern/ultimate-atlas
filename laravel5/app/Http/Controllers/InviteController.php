<?php

namespace App\Http\Controllers;

use Mail;
use App\Exceptions\BadRequestException;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\PasswordReset;
use App\Lib\Salt;
use App\Lib\In;
use App\Lib\UrlToken;
use App\Lib\PasswordGenerator;
use App\Mail\ResetPasswordMail;


class InviteController extends Controller
{
    public function __construct() {
        $this->middleware('api');    
    }

    public function invite(Request $r) {
        $pwd = Salt::make(16);
        $token = UrlToken::make();

        $salt = PasswordGenerator::salt();
        $password = PasswordGenerator::hash($salt, $pwd);

        $id = User::insertGetId([
            'username' => $r->input('username'),
            'fname' => $r->input('fname'),
            'lname' => $r->input('lname'),
            'email' => $r->input('email'),
            'password' => $password,
            'salt' => $salt,
            'activated' => 'FALSE',

            'gender' => 'M',
            'birth' => null,
            'role' => 'ADMIN',
            
            'created_at' => In::now()
        ]);
        $prid = PasswordReset::insertGetId([
            'token' => $token,
            'email' => $r->input('email'),
            'expires' => In::passwordResetTokenPeriod(),
            'created_at' => In::now()
        ]);

        $user = User::where('id',$id)->first();
        $pr = PasswordReset::where('id',$prid)->first();
        Mail::to($user->email)->send((new ResetPasswordMail($pr, $user))->invite());

        return [ 'invited' => true, 'user' => $user, 'password_reset' => $pr ];
    }

    public function get_user(Request $r, $id) {
        $user = User::where('id',$id)->first();
        if (!$user) throw new BadRequestException("User not found.");
        return ['user' => $user ];
    }
}
