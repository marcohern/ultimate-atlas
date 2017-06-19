<?php

namespace App\Http\Controllers;

use App\Exceptions\UAException;
use App\Exceptions\NotFoundException;
use App\Exceptions\BadRequestException;

use Mail;
use App\Models\User;
use App\Models\PasswordReset;
use App\Lib\Hasher;
use App\Lib\In;
use App\Mail\ResetPasswordMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use PDOException;

class UserController extends Controller
{
    private $hasher;
    private $um;
    private $prm;

    public function __construct(User $um, Hasher $hasher, PasswordReset $prm) {
        $this->middleware('api');
        $this->middleware('secure');
        $this->um = $um;
        $this->prm = $prm;
        $this->hasher = $hasher;
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
        return $this->um->search($lq, 100);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $r)
    {   
        try {
            $email = $r->input('email');
            DB::beginTransaction();
            $user = $this->um->create([
                'username' => $r->input('username'),
                'fname' => $r->input('fname'),
                'lname' => $r->input('lname'),
                'email' => $email,
                'gender' => $r->input('gender'),
                'birth' => $r->input('birth'),
                'role' => $r->input('role'),
                'password' => $r->input('password')
            ]);

            $pr = $this->prm->create([
                'email' => $email,
                'token' => $this->hasher->token()
            ]);

            Mail::to($email)->send((new ResetPasswordMail($pr, $user))->createUser());
            DB::commit();
            return [
                'affected' => 1,
                'saved' => true,
                'user' => $user
            ];
        } catch (PDOException $ex) {
            DB::rollback();
            throw new BadRequestException("Error storing user", 400, $ex);
        } catch (Exception $ex) {
            DB::rollback();
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
        return $this->um->view($id);
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
            $user = $this->um->modify($id, [
                'username' => $r->input('username'),
                'fname' => $r->input('fname'),
                'lname' => $r->input('lname'),
                'email' => $r->input('email'),
                'gender' => $r->input('gender'),
                'birth' => $r->input('birth'),
                'role' => $r->input('role')
            ]);
            
            return  $user;
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
        return $this->um->erase($id);
    }
}
