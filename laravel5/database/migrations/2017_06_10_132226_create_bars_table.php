<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bars', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',128);
            $table->string('slug',128)->unique();
            $table->string('type',64)->default('bar')->index();
            $table->enum('enabled',['TRUE','FALSE'])->default('TRUE');
            $table->enum('verified',['TRUE','FALSE'])->default('TRUE');
            $table->longText('description');
            $table->integer('city_id')->index();
            $table->integer('user_id')->index();
            $table->integer('zone_id')->nullable();
            $table->string('address',255)->default('');
            $table->string('zip',32)->nullable();
            $table->decimal('lat', 17, 14)->default(0);
            $table->decimal('lng', 17, 14)->default(0);
            $table->decimal ('lat_ne', 17, 14)->default(0);
            $table->decimal ('lng_ne', 17, 14)->default(0);
            $table->decimal ('lat_sw', 17, 14)->default(0);
            $table->decimal ('lng_sw', 17, 14)->default(0);
            $table->string('email',128)->index();
            $table->string('phone1',32);
            $table->string('phone2',32)->default('');
            $table->string('mobile',32)->default('');
            $table->string('website',255)->default('');
            $table->string('contact_name')->default('');
            $table->integer('photos')->default(0);
            $table->datetime('modified')->index();

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
            $table->index(['enabled','city_id','name']);
        });
        DB::statement("ALTER TABLE bars ADD genre SET ("
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
        Schema::dropIfExists('bars');
    }
}
