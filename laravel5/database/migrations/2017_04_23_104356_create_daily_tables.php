<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDailyTables extends Migration
{
    private function create_daily_trans() {
        Schema::create('daily_trans', function (Blueprint $table) {
            $table->increments('id');
            $table->datetime('event_date')->unique();
            $table->integer('cat_id');
            $table->integer('user_id');
            $table->decimal('value', 20, 2);
            $table->enum('type',['CASH','DEBIT'])->default('CASH');
            $table->enum('from',['POCKET','STASH','DEBIT','CREDIT','3RDPARTY','ACCOUNT'])->default('POCKET');
            $table->enum('to'  ,['POCKET','STASH','DEBIT','CREDIT','3RDPARTY','ACCOUNT'])->default('3RDPARTY');
            $table->integer('from_acc')->nullable();
            $table->integer('to_acc')->nullable();
            $table->timestamps();
            $table->index(['user_id','event_date']);
        });
    }

    private function create_daily_accs() {
        Schema::create('daily_accs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->enum('type',['POCKET','STASH','DEBIT','CREDIT','ACCOUNT'])->default('ACCOUNT');
            $table->string('name',64);
            $table->string('bank',64);
            $table->string('number',32);
            $table->enum('acctype',['SAVINGS','CHECKING'])->default('SAVINGS');
            $table->decimal('value', 20, 2);
            $table->timestamps();
            $table->unique(['user_id','type','bank','number']);
        });
    }

    private function create_daily_cat() {
        Schema::create('daily_cats', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',64);
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

    private function create_daily_month() {
        Schema::create('daily_months', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('yearmonth', 7)->unique();
            $table->smallInteger('year');
            $table->tinyInteger('month');
            $table->decimal('none', 20, 2)->default(0);
            $table->decimal('transport', 20, 2)->default(0);
            $table->decimal('food', 20, 2)->default(0);
            $table->decimal('purchases', 20, 2)->default(0);
            $table->decimal('sortie', 20, 2)->default(0);
            $table->decimal('other', 20, 2)->default(0);
            $table->decimal('input', 20, 2)->default(0);
            $table->decimal('output', 20, 2)->default(0);
            $table->decimal('balance', 20, 2)->default(0);
            $table->timestamps();
            $table->unique(['year','month']);
        });
    }

    private function create_daily_summary() {
        Schema::create('daily_summaries', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code',16)->unique();
            $table->datetime('start');
            $table->datetime('end')->nullable();
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
        $this->create_daily_accs();
        $this->create_daily_cat();
        $this->create_daily_day();
        $this->create_daily_month();
        $this->create_daily_summary();
        $this->create_daily_trans();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('daily_accs');
        Schema::dropIfExists('daily_cats');
        Schema::dropIfExists('daily_days');
        Schema::dropIfExists('daily_months');
        Schema::dropIfExists('daily_summaries');
        Schema::dropIfExists('daily_trans');
    }
}
