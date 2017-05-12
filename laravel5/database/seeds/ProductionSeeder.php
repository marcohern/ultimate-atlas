<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Lib\In;
use App\Lib\Hasher;

class ProductionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->users();
    }

    public function users() {

        $users = [
            [
                'id' => 1,
                'username' => 'marcohern',
                'password' => 'H0l31nTh3Ch3st',
                'fname' => 'Marco',
                'lname' => 'Hernandez',
                'email' => 'marcohern@gmail.com',
                'gender'=> 'M',
                'birth' => '1980-10-15',
                'role'  => 'ADMIN',
                'created_at' => In::now()
            ],
        ];

        foreach($users as $i => $user) {
            $salt = Hasher::salt();
            $password = Hasher::password($salt, $user['password']);

            $users[$i]['salt'] = $salt;
            $users[$i]['password'] = $password;
        }

        User::insert($users);
    }
}
