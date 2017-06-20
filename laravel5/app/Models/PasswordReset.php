<?php

namespace App\Models;

use App\Exceptions\NotFoundException;
use App\Exceptions\BadRequestException;
use Illuminate\Database\Eloquent\Model;
use App\Lib\In;
use App;

class PasswordReset extends Model
{
    private $hasher;

    public function __construct() {
        $this->hasher = App::make(\App\Lib\Hasher::class);
    }

    /**
    * Creates a Password Reset record
    * @param $data Token data (email and token)
    */
    public function create($email) {
        $data['email'     ] = $email;
        $data['token'     ] = $this->hasher->token();
        $data['expires'   ] = In::passwordResetTokenPeriod();
        $data['created_at'] = In::now();
        $id = $this->insertGetId($data);
        return $this->where('id',$id)->first();
    }

    public function viewByToken($token) {
        if (empty($token)) throw new BadRequestException("Token required.");
        $pr = $this->where('token',$token)->first();
        if (!empty($pr)) return $pr;
        throw new NotFoundException("Token not found.");
    }
}
