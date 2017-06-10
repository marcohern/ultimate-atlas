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

Route::resource('countries', 'CountriesController');
Route::resource('states', 'StatesController');
Route::resource('cities', 'CitiesController');
Route::resource('users', 'UserController');

Route::post('image/upload','ImageController@upload');
Route::get('image/display/{id}','ImageController@display');
Route::post('image/attach','ImageController@attach');
Route::resource('image', 'ImageController');

Route::resource('daily_trans', 'Daily\DailyTransController');
Route::resource('daily_cats', 'Daily\DailyCatsController');
Route::resource('daily_accs', 'Daily\DailyAccsController');

Route::post('/daily_charts/days','Daily\DailyChartsController@days');

Route::post('/check_token'           ,'AccountController@check_token');
Route::post('/signup'                ,'AccountController@signup');
Route::post('/activate'              ,'AccountController@activate');
Route::post('/login'                 ,'AccountController@login');
Route::post('/logout'                ,'AccountController@logout');
Route::get('/get_methods'            ,'AccountController@get_methods');

Route::post('/reset-password'       ,'ResetPasswordController@request');
Route::post('/reset-password/update','ResetPasswordController@update'   );

Route::post('invite','InviteController@invite');
Route::post('invite/set_password','InviteController@set_password');
Route::get ('invite/get_user','InviteController@get_user');

Route::post('/check_username','ValidatorController@check_username');
Route::post('/check_user_email','ValidatorController@check_user_email');
