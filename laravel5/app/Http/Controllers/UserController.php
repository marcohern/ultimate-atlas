<?php

namespace App\Http\Controllers;

use App\Exceptions\UAException;
use App\Exceptions\NotFoundException;
use App\Exceptions\BadRequestException;

use Mail;
use App\User;
use App\PasswordReset;
use App\Lib\Hasher;
use App\Lib\In;
use App\Mail\ResetPasswordMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use PDOException;

class UserController extends Controller
{

    public function __construct() {
        $this->middleware('api');
        //$this->middleware('secure');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $r)
    {
        //
        $q = $r->input('q','');
        $lq = str_replace(" ", "%", $q);
        return User::query($lq, 100);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $r)
    {
        $password = Hasher::random(16);
        $salt = Hasher::salt();
        $pwd = Hasher::password($salt, $password);
        $token = Hasher::token();
        $email = $r->input('email');
        
        try {
            $id = User::insertGetId([
                'username' => $r->input('username'),
                'fname' => $r->input('fname'),
                'lname' => $r->input('lname'),
                'email' => $email,
                'gender' => 'M',//$r->input('gender'),
                'birth' => $r->input('birth'),
                'role' => $r->input('role'),

                'password' => $pwd,
                'salt' => $salt,
                'activated' => 'FALSE',

                'created_at' => In::now()
            ]);

            $prid = PasswordReset::insertGetId([
                'email' => $email,
                'token' => $token,
                'expires' => In::passwordResetTokenPeriod(),
                'created_at' => In::now()
            ]);

            $user = User::where('id', $id)->first();
            $pr = PasswordReset::where('id', $prid)->first();

            Mail::to($email)->send((new ResetPasswordMail($pr, $user))->createUser());

            return [
                'affected' => 1,
                'saved' => true,
                'user' => $user
            ];
        } catch (PDOException $ex) {
            throw new BadRequestException("Error storing user", 400, $ex);
        } catch (Exception $ex) {
            throw new BadRequestException("Error storing user", 400, $ex);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return [
            'user' => User::get($id)
        ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $r, $id)
    {
        try {
            $affected = User::where('id', $id)
                ->update([
                    'username' => $r->input('username'),
                    'fname' => $r->input('fname'),
                    'lname' => $r->input('lname'),
                    'email' => $r->input('email'),
                    'gender' => $r->input('gender'),
                    'birth' => $r->input('birth'),
                    'role' => $r->input('role'),
                    'updated_at' => In::now()
                ]
            );
            $user = User::get($id);
            return [
                'affected' => $affected,
                'saved' => true,
                'user' => $user
            ];
        } catch (PDOException $ex) {
            throw new BadRequestException("Error updating user", 400, $ex);
        } catch (Exception $ex) {
            throw new BadRequestException("Error updating user", 400, $ex);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $col = 'username';
        if (is_numeric($id)) $col = 'id';
        $user = User::get($id);
        if (!$user) throw new NotFoundException('User not found');
        $deleted = User::where($col, $id)->delete();

        return [
            'affected' => $deleted,
            'deleted' => true,
            'user' => $user
        ];
    }
}
