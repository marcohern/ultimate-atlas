<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->increments('id');
            $table->string('profile',32)->default('original');
            $table->string('density',32)->default('original');
            $table->string('slug'   ,32);
            $table->integer('index')->default(0);
            $table->string('filename',128);
            $table->string('type',64); //mime
            $table->integer('width');
            $table->integer('height');
            $table->integer('parent_id')->nullable()->index();
            $table->timestamps();
            $table->unique(['profile','density','slug','index']);
        });

        DB::statement("ALTER TABLE images ADD bytes LONGBLOB NULL");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('images');
    }
}
