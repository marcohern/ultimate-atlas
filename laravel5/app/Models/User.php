<?php

namespace App\Models;

use App\Exceptions\NotFoundException;

use Illuminate\Support\Facades\DB;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Lib\In;
use App;

class User extends Authenticatable
{
    use Notifiable;

    public function __construct() {
        $this->hasher = App::make(App\Lib\Hasher::class);
    }

    public static function search($q='', $limit=100, $offset=0) {
        $query = self::select(['id', 'username', 'lname', 'fname', 'email'])
            ->latest()->take($limit)->skip($offset);
        if (!empty($q)) {
            $query->where('username', 'LIKE', "%$q%")
                ->orwhere('lname'   , 'LIKE', "%$q%")
                ->orwhere('fname'   , 'LIKE', "%$q%");
        }
        return $query->get();
    }

    public function view($id) {
        $col = 'username';
        if (is_numeric($id)) $col = 'id';
        $user = self::where($col, $id)->first();
         if (!$user) throw new NotFoundException('User not found');
        return $user;
    }

    public function create($data) {
        $password = $data['password'];
        $salt     = $this->hasher->salt();
        $pwd      = $this->hasher->password($salt, $password);

        $data['salt'           ] = $salt;
        $data['password'       ] = $pwd;
        $data['activated'      ] = 'FALSE';
        $data['activated_token'] = $this->hasher->token();
        $data['created_at'     ] = In::now();
        $id = $this->insertGetId($data);
        return $this->where('id',$id)->first();
    }

    public function modify($id, $data) {
        $user = $this->select('id')->where('id',$id)->first();
        if ($user) {
            $data['updated_at'] = In::now();
            $this->where('id',$id)->update($data);
            return $this->where('id',$id)->first();
        }
        throw new NotFoundException("User not found");
    }

    public function getLoginUserByUsername($username) {
        $user = $this->select(['id','username','password','salt','email'])
            ->where('username', $username)
            ->where('activated', 'TRUE')
            ->first();
        if (empty($user)) throw new NotFoundException("User not found");
        return $user;
    }

    public function getLoginUserByEmail($email) {
        $user = $this->select(['id','username','password','salt','email'])
            ->where('email', $email)
            ->where('activated', 'TRUE')
            ->first();
        if (empty($user)) throw new NotFoundException("User not found");
        return $user;
    }

    public function resetPassword($id, $password) {
        $salt = $this->hasher->salt();
        $encPassword = $this->hasherpassword($salt, $password);

        $af = $this->um->where('id', $user->id)->update([
            'password' => $password,
            'salt' => $salt,
            'activated' => 'TRUE',
            'updated_at' => In::now()
        ]);
        return $this->where('id',$id)->first();
    }

    public function erase($id) {
        $col = 'id';
        if (!is_numeric($id)) $col = 'username'; 
        $user = $this->where($col,$id)->first();
        if ($user) {
            $this->where($col,$id)->delete();
            return $user;
        }
        throw new NotFoundException("User not found");
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password','salt', 'remember_token',
    ];
}
