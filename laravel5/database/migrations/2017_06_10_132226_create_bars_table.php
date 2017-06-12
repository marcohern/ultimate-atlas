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
            $table->enum('enabled',['TRUE','FALSE'])->default('TRUE');
            $table->enum('verified',['TRUE','FALSE'])->default('TRUE');
            $table->longText('description')->default('');
            $table->integer('city_id')->index();
            $table->integer('zone_id')->nullable();
            $table->string('address',128)->default('');
            $table->string('zip',32)->nullable();
            $table->decimal('lat', 17, 14)->default(0);
            $table->decimal('lng', 17, 14)->default(0);
            $table->string('email',128)->unique();
            $table->string('phone1',32);
            $table->string('phone2',32)->default('');
            $table->string('mobile',32)->default('');
            $table->string('web_url',255)->default('');
            $table->string('contact_name')->default('');
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
