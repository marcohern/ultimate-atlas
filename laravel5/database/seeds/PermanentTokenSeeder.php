<?php

use Illuminate\Database\Seeder;
use App\Lib\Hasher;
use App\Lib\In;
use App\Models\Token;

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
            'token' => 'd53f5b196d054ecbd1a82aa8499f9739c71b006eae9eff9dcc4f94920febaeb8',
            'expires' => In::lastDate(),
            'user_id' => 1,
            'created_at' => In::now()
        ]);
    }
}
