<?php

namespace App\Console\Commands\Daily;

use Daily\DailyTrans;
use Illuminate\Console\Command;

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
        $this->info('Getting last processed date...');
    }
}
