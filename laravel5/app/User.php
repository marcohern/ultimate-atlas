<?php

namespace App;

use App\Exceptions\NotFoundException;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    public static function query($q=null, $limit=100) {
        $query = self::select(['id','username','lname','fname','email'])->latest()->take($limit);
        if (!empty($q)) {
            $query->where('username', 'LIKE', "%$q%")
                ->orwhere('lname'   , 'LIKE', "%$q%")
                ->orwhere('fname'   , 'LIKE', "%$q%");
        }
        return $query->get();
    }

    public static function get($id) {
        $col = 'username';
        if (is_numeric($id)) $col = 'id';
        $user = self::where($col, $id)->first();
         if (!$user) throw new NotFoundException('User not found');
        return $user;
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
