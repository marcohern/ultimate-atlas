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
Route::resource('daily_trans', 'Daily\DailyTransController');
Route::resource('daily_cats', 'Daily\DailyCatsController');

Route::post('/activate','AccountController@activate');
Route::post('/reset-password','AccountController@reset_password');
Route::post('/check_token','AccountController@check_token');
Route::post('/signup','AccountController@signup');
Route::post('/login','AccountController@login');
Route::post('/logout','AccountController@logout');
Route::get('/get_methods','AccountController@get_methods');

Route::post('/check_username','ValidatorController@check_username');
Route::post('/check_user_email','ValidatorController@check_user_email');
