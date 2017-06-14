<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Lib\Slugger;

class TestCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:all';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Do a simple test';

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
        $inputs = [
            'Hello There',
            'Mc\'Donalds',
            '  this needs a trimming / slashing ',
            'Hello There. Goodbye now.',
            'Café Bár de la / inquisición',
            'New+York+City',
            'DAME ÑAME',
            'This:Means',
            ' ¿Que Demonios?',
            ' ¡Demonios!',
            ' "And I Quote:" ',
            'About 10% of all',
            'It costs about US $400.',
            'M/S\N/B\S!',
            'John & Wayne',
            'Nous sommes français!',
        ];
        foreach ($inputs as $s) {
            
            printf("%-48s: %s\n", $s, Slugger::slugify($s));
        }
    }
}
