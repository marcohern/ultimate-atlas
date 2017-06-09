<?php

use Illuminate\Database\Seeder;
use App\Models\User;
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
        $this->call(Production\UsersSeeder::class);
        $this->call(CountriesSeeder::class);
        $this->call(StatesSeeder::class);
        $this->call(CitiesSeeder::class);
        $this->call(ImageSeeder::class);
    }
}
