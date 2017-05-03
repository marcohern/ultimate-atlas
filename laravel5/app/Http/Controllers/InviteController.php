<?php

namespace App\Http\Controllers;

use Mail;
use App\Exceptions\BadRequestException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\User;
use App\PasswordReset;
use App\Lib\Salt;
use App\Lib\UrlToken;
use App\Mail\Invite;

class InviteController extends Controller
{
    public function __construct() {
        $this->middleware('api');    
    }

    public function invite(Request $r) {
        $pwd = Salt::make(16);
        $salt = Salt::make(48);
        $token = UrlToken::make(64);
        $password = Hash::make($salt.$pwd);

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
            
            'created_at' => new \Datetime("now")
        ]);
        $prid = PasswordReset::insertGetId([
            'token' => $token,
            'email' => $r->input('email'),
            'created_at' => new \Datetime("now")
        ]);

        $user = User::where('id',$id)->first();
        Mail::to($user->email)->send(new Invite($user, $token));

        return [ 'invited' => true, 'user' => $user, 'token' => $token ];
    }

    public function get_user(Request $r, $id) {
        $user = User::where('id',$id)->first();
        if (!$user) throw new BadRequestException("User not found.");
        return ['user' => $user ];
    }

    public function set_password(Request $r) {
        $token = $r->input('token');
        $pwd = $r->input('password');
        if (empty($pwd)) throw new BadRequestException("Password required.");
        if (empty($pwd)) throw new BadRequestException("Token required.");
        $pr = PasswordReset::where('token',$token)->first();
        if (!$pr) throw new BadRequestException("Set password token not found.");
        $user = User::where('email',$pr->email)->first();
        if (!$user) throw new BadRequestException("Set password token email not found.");

        $salt = Salt::make(48);
        $password = Hash::make($salt.$r->input('password'));
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
