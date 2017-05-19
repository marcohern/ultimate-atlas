<?php

use Illuminate\Database\Seeder;
use App\Daily\DailySummary;
use App\Lib\In;

class DailySummaryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DailySummary::insert([
            ['id' => 1, 'code'=>'daily','start'=>'2000-01-01','end' => null,'created_at' => In::now(), 'updated_at'=>null]
        ]);
    }
}
