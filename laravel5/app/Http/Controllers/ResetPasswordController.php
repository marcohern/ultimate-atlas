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
    private $um;
    private $prm;
    private $hasher;

    public function __construct(User $um, Hasher $hasher, PasswordReset $prm) {
        $this->um = $um;
        $this->hasher = $hasher;
        $this->prm = $prm;
    }
    public function request(Request $r) {
        $user = $this->um->getLoginUserByEmail($r->input('email'));
        if (!$user) throw new BadRequestException("Email not found.");

        try {
            DB::beginTransaction();
            $pr = $this->prm->create([
                'email' => $r->input('email'),
                'token' => $this->hasher->token()
            ]);

            Mail::to($email)->send(new ResetPasswordMail($pr, $user));
            DB::commit();
            return [
                'password_reset_requested' => true,
                'user' => $user,
                'password_reset' => $pr
            ];
        } catch(\Exception $ex) {
            DB::rollback();
        }
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
