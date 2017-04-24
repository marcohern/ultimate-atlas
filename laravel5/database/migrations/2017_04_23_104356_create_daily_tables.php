<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDailyTables extends Migration
{
    private function create_daily_trans() {
        Schema::create('daily_trans', function (Blueprint $table) {
            $table->increments('id');
            $table->datetime('event_date');
            $table->integer('cat_id');
            $table->integer('user_id');
            $table->decimal('value', 20, 2);
            $table->enum('type',['CASH','DEBIT'])->default('CASH');
            $table->timestamps();
            $table->index(['user_id','event_date']);
        });
    }

    private function create_daily_cat() {
        Schema::create('daily_cats', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->enum('hypercat',['NONE','TRANSPORT','FOOD','PURCHASES','SORTIE','OTHER'])->default('NONE');
            $table->timestamps();
        });
    }

    private function create_daily_day() {
        Schema::create('daily_days', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->date('day');
            $table->enum('type',['CASH','DEBIT'])->default('CASH');
            $table->decimal('none', 20, 2)->default(0);
            $table->decimal('transport', 20, 2)->default(0);
            $table->decimal('food', 20, 2)->default(0);
            $table->decimal('purchases', 20, 2)->default(0);
            $table->decimal('sortie', 20, 2)->default(0);
            $table->decimal('other', 20, 2)->default(0);
            $table->decimal('input', 20, 2)->default(0);
            $table->decimal('output', 20, 2)->default(0);
            $table->decimal('balance', 20, 2)->default(0);
            $table->unique(['user_id','day','type']);
            $table->timestamps();
        });
    }


    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->create_daily_cat();
        $this->create_daily_trans();
        $this->create_daily_day();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('daily_trans');
        Schema::dropIfExists('daily_cats');
        Schema::dropIfExists('daily_days');
    }
}
