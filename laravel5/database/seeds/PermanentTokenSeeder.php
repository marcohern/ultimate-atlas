<?php

use Illuminate\Database\Seeder;
use App\Lib\Hasher;
use App\Lib\In;
use App\Token;

class PermanentTokenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Token::insert([
            'token' => Hasher::token(),
            'expires' => In::lastDate(),
            'user_id' => 1,
            'created_at' => In::now()
        ]);
    }
}
