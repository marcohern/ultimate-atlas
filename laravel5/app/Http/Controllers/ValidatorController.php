<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ValidatorController extends Controller
{
    public function __construct() {
        $this->middleware('api');
    }

    public function check_username(Request $r) {
        $user = User::select('username')->where('username', $r->input('username'))->first();
        if ($user) {
            return [
                'usernameExists' => true,
                'usernameUnique' => false
            ];
        } else {
            return [
                'usernameExists' => false,
                'usernameUnique' => true
            ];
        }
    }

    public function check_user_email(Request $r) {
        $user = User::select('email')->where('email', $r->input('email'))->first();
        if ($user) {
            return [
                'userEmailExists' => true,
                'userEmailUnique' => false
            ];
        } else {
            return [
                'userEmailExists' => false,
                'userEmailUnique' => true
            ];
        }
    }
}
