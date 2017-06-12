<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBarsxTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('barsx', function (Blueprint $table) {
            $table->primary('id');
            $table->integer('franhise_id')->nullable()->index();
            $table->enum('plan',[
                'lead','copper','bronze','aluminium','tin','iron',
                'silver','gold','platinum','titanium','diamond','uranium',
                'zirconium','unobtanium','metallic_hidrogen','degenerate_matter']
            )->default('copper');
            $table->integer('staff_score')->default(0);
            $table->integer('public_score')->default(0);
            $table->integer('hits')->default(0);
            $table->integer('likes')->default(0);
            $table->decimal('avg_price',20,2)->default(0);
            $table->decimal('cover',20,2)->default(0);
            $table->string('color',32)->default('');
            $table->timestamps();
        });
        DB::statement("ALTER TABLE barsx ADD genre SET ("
            ."'Rock','Pop','Rap','Ska','Reggae','Blues',"
            ."'Jazz','Lounge','Clasica','Reggaeton','Salsa'"
            .",'Cumbia','Electronica','Crossover','Bailables'"
            .") DEFAULT '' AFTER color");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('barsx');
    }
}
