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
Route::get('/ua'       , function () { return view('angular2'); });
Route::get('/ua/{path}', function ($path) { return view('angular2'); });

Route::get('/'       , function () { return view('theory/main'); });