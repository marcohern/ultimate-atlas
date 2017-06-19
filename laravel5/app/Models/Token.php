<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Exceptions\NotFoundException;
use App\Lib\Hasher;
use App\Lib\In;
use App;

class Token extends Model
{
    private $hasher;
    public function __construct() {
        parent::__construct();
        $this->hasher = App::make(App\Lib\Hasher::class);
    }
    /**
    * Get a token by ID
    * @param $id Token numeric record id (not the token string)
    * @return Token Record
    * @throws NotFoundException If the token is not found.
    */
    public function view($id) {
        $token = self::where('id',$id)->first();
        if ($token) return $token;
        throw new NotFoundException("Token not found.");
        
    }

    /**
    * Get a token by Token String
    * @param $token Token String
    * @return Token Record
    * @throws NotFoundException If the token is not found.
    */
    public function getToken($token) {
        $token = $this->where('token',$token)->first();
        if ($token) return $token;
        throw new NotFoundException("Token not found.");
    }

    /**
    * Creates a token
    * @param $user_id User ID associated to the token (eg: logs in)
    * @return Token Tecord
    */
    public function create($user_id) {
         $id = self::insertGetId([
            'token' => $this->hasher->token(),
            'user_id' => $user_id,
            'expires' => In::loginTokenPeriod(),
            'created_at' => In::now()
        ]);
        return $this->where('id',$id)->first();
    }

    /**
    * Increases an existing tokens expire date.
    * @param $token_id Token ID
    * @return Token Record after Update
    */
    public function upgrade($token_id) {
        return self::where('id',$token_id)->update([
            'expires' => In::loginTokenPeriod(),
            'updated_at' => In::now()
        ]);
    }

    /**
    * Deletes an existing token.
    * @param $token_id Token ID
    */
    public static function destroy($token_id) {
        return self::where('id',$token_id)->delete();
    }
}
