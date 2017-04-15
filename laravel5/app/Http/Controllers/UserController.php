<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

    public function __construct() {
        $this->middleware('api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $users = DB::table('users')
            ->select('*')
            ->get();
        return $users;
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
        $user = DB::table('users')->insert(
            'INSERT INTO users SET '.
            '(username, fname, lname, email, gender, birth, role, created_at) '.
            'VALUES (?,?,?,?,?,?,?,NOW())', [
                $r->input('username'),
                $r->input('fname'),
                $r->input('lname'),
                $r->input('email'),
                $r->input('gender'),
                $r->input('birth'),
                $r->input('role')
            ]
        );
        return $user;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
        $user = DB::table('users')
            ->select('*')
            ->where('id', $id)
            ->get();
        return $user;
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
        $user = DB::table('users')
            ->select('*')
            ->where('id', $id)
            ->get();
        $affected = DB::update('UPDATE users SET '.
            'username = ?, '.
            'fname = ?, '.
            'lname = ?, '.
            'email = ?, '.
            'gender = ?, '.
            'birth = ?, '.
            'role = ? '.
            'WHERE id = ?', [
                $r->input('username'),
                $r->input('fname'),
                $r->input('lname'),
                $r->input('email'),
                $r->input('gender'),
                $r->input('birth'),
                $r->input('role'),
                $id
            ]
        );
        return [
            'affected' => $affected,
            'updated' => true,
            'user' => $user
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = DB::table('users')
            ->select('*')
            ->where('id', $id)
            ->get();
        $deleted = DB::delete('DELETE FROM users WHERE id = ?',[$id]);

        return [
            'affected' => $deleted,
            'deleted' => true,
            'user' => $user
        ];
    }

    private function genSalt($size) {
        $tpl = "abcdefghijlkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#&%()[]{}!?";
        $n = strlen($tpl);
        $r = "";
        for ($i=0; $i<$size; $i++) {
            $index = rand(0, $n-1);
            $r .= $tpl[$index];
        }
        return $r;
    }

    public function pwd($pwd='') {
        $salt = $this->genSalt(32);
        return [
            'password' => $pwd,
            'salt' => $salt,
            'hashed' => Hash::make($pwd.$salt)
        ];
    }
}
