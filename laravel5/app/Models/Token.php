<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Exceptions\NotFoundException;
use App\Lib\Hasher;
use App\Lib\In;

class Token extends Model
{
    /**
    * Get a token by ID
    * @param $id Token numeric record id (not the token string)
    * @return Token Record
    * @throws NotFoundException If the token is not found.
    */
    public static function get($id) {
        $token = self::where('id',$id)->first();
        if (empty($token)) throw new NotFoundException("Token not found.");
        return $token;
    }

    /**
    * Get a token by Token String
    * @param $token Token String
    * @return Token Record
    * @throws NotFoundException If the token is not found.
    */
    public function getToken($token) {
        $token = $this->where('token',$token)->first();
        if (empty($token)) throw new NotFoundException("Token not found.");
        return $token;
    }

    /**
    * Creates a token
    * @param $user_id User ID associated to the token (eg: logs in)
    * @return Token Tecord
    */
    public static function create($user_id) {
         $id = self::insertGetId([
            'token' => Hasher::token(),
            'user_id' => $user_id,
            'expires' => In::loginTokenPeriod(),
            'created_at' => In::now()
        ]);
        return self::get($id);
    }

    /**
    * Increases an existing tokens expire date.
    * @param $token_id Token ID
    * @return Token Record after Update
    */
    public static function upgrade($token_id) {
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
