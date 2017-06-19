<?php

namespace App\Http\Controllers;

use App\Exceptions\BadRequestException;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Mail\ResetPasswordMail;
use App\Models\User;
use App\Models\PasswordReset;
use App\Lib\Hasher;
use App\Lib\In;
use App\Lib\Salt;
use App\Lib\UrlToken;
use Mail;


class InviteController extends Controller
{
    private $hasher;
    private $um;

    public function __construct(Hasher $hasher, User $um) {
        $this->middleware('api');

        $this->hasher = $hasher;
        $this->um = $um;
    }

    public function invite(Request $r) {
        try {
            DB::beginTransaction();

            $user = $this->um->create([
                'username' => $r->input('username'),
                'fname' => $r->input('fname'),
                'lname' => $r->input('lname'),
                'email' => $r->input('email'),
                'password' => $this->hasher->random(16),
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
