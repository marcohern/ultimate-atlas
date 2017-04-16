<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::resource('users', 'UserController');
Route::post('/generate_password','AccountController@generate_password');
Route::post('/check_token','AccountController@check_token');
Route::post('/login','AccountController@login');
Route::post('/logout','AccountController@logout');
