<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert(
            ['id' => 1 , 'username' => 'bhader'  , 'fname' => 'Bill' , 'lname' => 'Hader'  , 'gender' => 'M', 'birth' => NULL,
            'email' => 'bhader@mail.com'  , 'role' => 'ADMIN', 'password' => '$2y$10$ni4.zv.U7pd183A/mNtKwublpobco094K0G7tGrY81w2RreAxyTtq', 'salt' => '8g9mOhsvGlM1BH1n6kBvaryaqBoYZ8yN']
        );
        DB::table('users')->insert(
            ['id' => 2 , 'username' => 'farmisen', 'fname' => 'Fred' , 'lname' => 'Armisen', 'gender' => 'M', 'birth' => NULL,
            'email' => 'farmisen@mail.com', 'role' => 'ADMIN', 'password' => '$2y$10$oj2cYWjK5OfxbRMdK3i8deY9lgMm3iKH1JtGFlACbf2456lIAsA9S', 'salt' => '[nZJu{50hwHJ3oWPzd&AupBKQQouEN8y']
        );
        DB::table('users')->insert(
            ['id' => 3 , 'username' => 'srogen'  , 'fname' => 'Seth' , 'lname' => 'Rogen'  , 'gender' => 'M', 'birth' => NULL,
            'email' => 'srogen@mail.com'  , 'role' => 'ADMIN', 'password' => '$2y$10$8BhkoSEwgZVRWwfssJwxQ.VyrEyknQrcMfbjkuy9Y3gHFnD8a1Ph.', 'salt' => '0M7aJR1R(nfWB2r15ihfxIQ)e5nIxb6d']
        );
        DB::table('users')->insert(
            ['id' => 4 , 'username' => 'ashumer' , 'fname' => 'Amy'  , 'lname' => 'Shumer' , 'gender' => 'F', 'birth' => NULL,
            'email' => 'ashumer@mail.com' , 'role' => 'ADMIN', 'password' => '$2y$10$r4WgfLWbDhZbUNMjphO.QutpxSd4J1X5pYqEAJZkT/YuIZKqQZ6tC', 'salt' => 'NTdcp4Ui}Z5zHcgrlnxIW(B0XPnaQ?dj']
        );
        DB::table('users')->insert(
            ['id' => 5 , 'username' => 'jfranco' , 'fname' => 'James', 'lname' => 'Franco' , 'gender' => 'M', 'birth' => NULL,
            'email' => 'jfranco@mail.com' , 'role' => 'ADMIN', 'password' => '$2y$10$DJhclhaRtVYyahceojTlPOeBXnhHZ1Cmx/gifiqqsX9VkMpHV.F7C', 'salt' => 'Shm8%6]9L1o}3up)IMBjF3#iydi[cmeV']
        );
        DB::table('users')->insert(
            ['id' => 6 , 'username' => 'jsegel'  , 'fname' => 'Jason', 'lname' => 'Segel'  , 'gender' => 'M', 'birth' => NULL,
            'email' => 'jsegel@mail.com'  , 'role' => 'ADMIN', 'password' => '$2y$10$BTpd7sXX0s9QzbeFiXFoD.Q5zBvhgUiLigKxq9M7l31fqvl4DpfDi', 'salt' => 'tqIlcE?NlnK(I06]snfX]]6u![obgsXA']
        );
        DB::table('users')->insert(
            ['id' => 7 , 'username' => 'jblack'  , 'fname' => 'jack' , 'lname' => 'Black'  , 'gender' => 'M', 'birth' => NULL,
            'email' => 'jblack@mail.com'  , 'role' => 'ADMIN', 'password' => '$2y$10$0Lej9htK8JfKZWM5/hsmcuQefZgU9mFOK9jIYt55A2jLBmcwO5NS6', 'salt' => 'IlKLOKdYYOQmtChLPnoLi?5h)?iar6A0']
        );
    }
}