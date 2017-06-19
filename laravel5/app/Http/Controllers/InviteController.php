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
    private $hasher;
    private $um;
    private $prm;

    public function __construct(Hasher $hasher, User $um, PasswordReset $prm) {
        $this->middleware('api');

        $this->hasher = $hasher; 
        $this->um = $um;
    }

    public function invite(Request $r) {
        try {
            DB::beginTransaction();

            $user = $this->user->create([
                'username' => $r->input('username'),
                'fname' => $r->input('fname'),
                'lname' => $r->input('lname'),
                'email' => $r->input('email'),
                'password' => $r->input('password'),
                'gender' => $r->input('gender'),
                'birth' => $r->input('birth'),
                'role' => $r->input('role')
            ]);

            $pr = $this->prm->create($r->input('email'));

            Mail::to($user->email)->send((new ResetPasswordMail($pr, $user))->invite());
            DB::commit();

            return [
                'invited' => true,
                'user' => $user,
                'password_reset' => $pr
            ];
        } catch (\Exception $ex) {
            DB::rollback();
            throw $ex;
        }
    }

    public function get_user(Request $r, $id) {
        return $this->um->view($id);
    }
}
