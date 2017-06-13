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
            $table->integer('zone_id')->nullable();
            $table->string('address',255)->default('');
            $table->string('zip',32)->nullable();
            $table->decimal('lat', 17, 14)->default(0);
            $table->decimal('lng', 17, 14)->default(0);
            $table->string('email',128)->index();
            $table->string('phone1',32);
            $table->string('phone2',32)->default('');
            $table->string('mobile',32)->default('');
            $table->string('website',255)->default('');
            $table->string('contact_name')->default('');
            $table->integer('photos')->default(0);
            $table->timestamps();
            $table->index(['enabled','city_id','name']);
        });
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
