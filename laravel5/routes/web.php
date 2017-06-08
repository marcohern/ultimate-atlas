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

//Email Routes
/*
Route::get('/ua/reset-password/{token}' , function ($token) { return view('angular2'); });
Route::get('/ua/signup/activate/{token}', function ($token) { return view('angular2'); });
Route::get('/ua/login'                  , function ()       { return view('angular2'); });
*/

//Images
Route::get('/i/{profile}/{density}/{slug}','ImageController@get_image');
Route::get('/i/{profile}/{density}/{slug}/{index}','ImageController@get_image');

//Ultimate Atlas Console
Route::get('/ua/{anything}', function ($path) { return view('angular2'); });
Route::get('/ua'           , function ()      { return view('angular2'); });

Route::get('/', function () { return view('theory/main'); });