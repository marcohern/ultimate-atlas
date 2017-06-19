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
use Illuminate\Support\Facades\DB;

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

    /**
    * Sends a request to reset a password.
    * @param $r Request.
    * @param $r.email User Email
    * @return User and Password reset record
    */
    public function request(Request $r) {
        $user = $this->um->getLoginUserByEmail($r->input('email'));
        if (!$user) throw new BadRequestException("Email not found.");

        try {
            DB::beginTransaction();
            $pr = $this->prm->create($r->input('email'));

            Mail::to($r->input('email'))->send(new ResetPasswordMail($pr, $user));
            DB::commit();
            return [
                'password_reset_requested' => true,
                'user' => $user,
                'password_reset' => $pr
            ];
        } catch(\Exception $ex) {
            DB::rollback();
            throw $ex;
        }
    }

    /**
    * Reset's the password for a user
    * @param $r Request.
    * @param $r.token The Reset Password token.
    * @param $r.password New password
    * @return User and Password reset record
    */
    public function update(Request $r) {
        $token = $r->input('token');
        $typedPassword = $r->input('password');
        if (empty($typedPassword)) throw new BadRequestException("Password required.");
        
        $pr = $this->prm->viewByToken($token);
        $user = $this->um->viewByEmail($pr->email);
        
        $updatedUser = $this->um->resetPassword($user->id, $typedPassword);

        $afp = $this->prm->where('token',$token)->delete();
        return $updatedUser;
    }
}
