<?php

use Illuminate\Database\Seeder;
use App\Models\Country;

class CountriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Country::insert([
// Countries
['id'=>1,'name'=>'Colombia','iso2'=>'CO','currency'=>'COP','lat'=>4.00971833452176,'lng'=>-72.7461853027343]
        ]);
    }
}
