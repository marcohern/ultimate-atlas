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

Route::get('/daily/{path}', function ($path) { return view('angular2'); });
Route::get('/signup/activate/{token}' , function ($token) { return view('angular2'); });
Route::get('/invite/{token}'          , function ($token) { return view('angular2'); });
Route::get('/reset-password/{token}'  , function ($token) { return view('angular2'); });
Route::get('/login'           , function ()       { return view('angular2'); });
Route::get('/test'            , function ()       { return view('angular2'); });
Route::get('/welcome'         , function ()       { return view('angular2'); });
Route::get('/'                , function ()       { return view('angular2'); });
