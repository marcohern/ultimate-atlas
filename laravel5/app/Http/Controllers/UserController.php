<?php

namespace App\Http\Controllers;

use App\User;
use App\Lib\Salt;
use App\Lib\UrlToken;
use App\Lib\PasswordGenerator;
use App\Exceptions\UAException;
use App\Exceptions\NotFoundException;
use App\Exceptions\BadRequestException;
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
        $usersq= User::select(['id','username','lname','fname','email'])
            ->latest()->take(100);
        if (!empty($q)) {
            $usersq->where('username', 'LIKE',  "%$q%")
                ->orwhere('lname', 'LIKE', "%$q%")
                ->orwhere('fname', 'LIKE', "%$q%");
        }
        $users = $usersq->get();
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
        $password = $r->input('username');
        $salt = PasswordGenerator::salt();
        $pwd = PasswordGenerator::hash($salt, $password);
        
        try {
            $id = User::insertGetId([
                'username' => $r->input('username'),
                'fname' => $r->input('fname'),
                'lname' => $r->input('lname'),
                'email' => $r->input('email'),
                'gender' => 'M',//$r->input('gender'),
                'birth' => $r->input('birth'),
                'role' => $r->input('role'),

                'password' => $pwd,
                'salt' => $salt,
                'activated' => 'FALSE',

                'created_at' => new \Datetime("now")
            ]);

            //TODO: send password reset email

            $user = User::where('id', $id)->first();
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
        $col = 'username';
        if (is_numeric($id)) $col = 'id';
        $user = User::where($col, $id)->first();
         if (!$user) throw new NotFoundException('User not found');
        return ['user' => $user];
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
                    'updated_at' => new \Datetime("now")
                ]
            );
            $user = User::where('id', $id)->first();
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
        $user = User::where($col, $id)->first();
        if (!$user) throw new NotFoundException('User not found');
        $deleted = User::where($col, $id)->delete();

        return [
            'affected' => $deleted,
            'deleted' => true,
            'user' => $user
        ];
    }

    public function g_stuff() { return [1,2,3]; }
    public function post_a() { return [1,2,3]; }
    public function p_b() { return [1,2,3]; }
    public function del_stuff() { return [1,2,3]; }
}
