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
            $table->string('name',64);
            $table->string('slug',64)->unique();
            $table->enum('public',['TRUE','FALSE'])->default('TRUE');
            $table->enum('active',['TRUE','FALSE'])->default('TRUE');
            $table->integer('city_id')->index();
            $table->string('address',128)->default('');
            $table->string('zip',32)->nullable();
            $table->decimal('lat', 17, 14)->default(0);
            $table->decimal('lng', 17, 14)->default(0);
            $table->string('email',128)->unique();
            $table->string('mobile',32);
            $table->string('phone1',32)->nullable();
            $table->string('phone2',32)->nullable();
            $table->timestamps();
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
