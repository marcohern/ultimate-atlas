<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ValidatorController extends Controller
{
    private $um;
    
    public function __construct(User $um) {
        $this->middleware('api');

        $this->um = $um;
    }

    public function check_username(Request $r) {
        $user = $this->um->select('username')->where('username', $r->input('username'))->first();
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
        $user = $this->um->select('email')->where('email', $r->input('email'))->first();
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
