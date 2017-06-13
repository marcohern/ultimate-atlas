<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::pattern('anything', '[\w\/\-_]+');
Route::pattern('id'     ,'\d+');
Route::pattern('index'  ,'\d+');
//Route::pattern('slug'   , '[\w_-\.]+');
Route::pattern('domain' , '[\w_-]+');
Route::pattern('profile', '[\w_-]+');
Route::pattern('density', '[\w_-]+');

//Email Routes
/*
Route::get('/ua/reset-password/{token}' , function ($token) { return view('angular2'); });
Route::get('/ua/signup/activate/{token}', function ($token) { return view('angular2'); });
Route::get('/ua/login'                  , function ()       { return view('angular2'); });
*/

//Images
Route::get('/i/{domain}/{profile}/{density}/{slug}/{index}','ImageController@get_image_all');
Route::get('/i/{domain}/{slug}/{index}','ImageController@get_image_sdi');
Route::get('/i/{slug}/{index}','ImageController@get_image_si');

Route::get('/i/{domain}/{profile}/{density}/{slug}','ImageController@get_image_pds');
Route::get('/i/{domain}/{slug}','ImageController@get_image_sd');
Route::get('/i/{slug}','ImageController@get_image_s');

//Ultimate Atlas Console
Route::get('/ua/{anything}', function ($path) { return view('angular2'); });
Route::get('/ua'           , function ()      { return view('angular2'); });

Route::get('/', function () { return view('theory/main'); });