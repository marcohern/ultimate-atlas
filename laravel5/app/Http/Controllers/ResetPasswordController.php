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
use App\Mail\ResetPasswordMail;

use Mail;
use Illuminate\Http\Request;

class ResetPasswordController extends Controller
{
    public function request(Request $r) {
        $token = Hasher::token();
        $email = $r->input('email');
        
        $user = User::where('email',$email)->first();
        if (!$user) throw new BadRequestException("Email not found.");

        $prid = PasswordReset::insertGetId([
            'email' => $email,
            'token' => $token,
            'created_at' => In::now(),
            'expires' => In::passwordResetTokenPeriod()
        ]);
        
        $pr = PasswordReset::where('id', $prid)->first();

        Mail::to($email)->send(new ResetPasswordMail($pr, $user));
        return [
            'affected' => 1,
            'created' => true,
            'password_reset' => $pr,
            'user' => $user
        ];
    }

    public function update(Request $r) {
        $token = $r->input('token');
        $pwd = $r->input('password');
        if (empty($pwd)) throw new BadRequestException("Password required.");
        if (empty($token)) throw new BadRequestException("Token required.");
        $pr = PasswordReset::where('token',$token)->first();
        if (!$pr) throw new BadRequestException("Set password token not found.");
        $user = User::where('email',$pr->email)->first();
        if (!$user) throw new BadRequestException("Set password token email not found.");

        $salt = Hasher::salt();
        $password = Hasher::password($salt, $r->input('password'));

        $af = User::where('id', $user->id)->update([
            'password' => $password,
            'salt' => $salt,
            'activated' => 'TRUE',
            'updated_at' => In::now()
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
