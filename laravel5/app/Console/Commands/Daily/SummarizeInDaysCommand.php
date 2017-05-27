<?php

namespace App\Console\Commands\Daily;

use DB;
use Daily\DailyTrans;
use Illuminate\Console\Command;
use App\Lib\In;

class SummarizeInDaysCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'daily:sumdays';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Summarizes transactions into a sum of transactions per day.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
        $this->info(In::now()->format("Y-m-d H:i:s"));
        $this->info('Calling procedure import_daily_day...');
        DB::select("CALL import_daily_day()");
        $this->info('Called! Done!');
    }
}
