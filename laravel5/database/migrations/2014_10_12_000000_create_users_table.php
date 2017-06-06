<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('username', 32)->unique();
            $table->string('fname', 64);
            $table->string('lname', 64);
            $table->enum('gender',['M','F','A','X'])->default('X');
            $table->datetime('birth')->nullable();
            $table->string('email')->unique();
            $table->enum('role',['ADMIN','USER']);
            $table->string('password',60);
            $table->string('salt',48);
            $table->enum('activated',['TRUE','FALSE'])->default('TRUE');
            $table->string('activated_token',64)->nullable();
            $table->index('activated_token');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
