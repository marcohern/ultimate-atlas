<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Lib\In;

class PasswordReset extends Model
{
    public function create($data) {
        $data['created_at'] = In::now();
        $data['expires'] = In::passwordResetTokenPeriod();
        $id = $this->insertGetId($data);
        return $this->where('id',$id)->first();
    }
}
