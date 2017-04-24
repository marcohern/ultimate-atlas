<?php

namespace App\Lib;

use Illuminate\Support\Facades\Route;

class AutoRouter {

    public static function getMethods($controllerClass) {
        $methods = get_class_methods($controllerClass);
        $fmethods = [
            'get' => [],
            'post' => [],
            'put' => [],
            'del' => [],
        ];
        foreach ($methods as $m) {
            if (preg_match("/^g(et)?_/" ,$m)) {
                $r=['verb'=>'get','method'=>$m,'action'=>preg_replace("/^g(et)?_/","",$m)];
                $fmethods['get'][] = $r;
            }
            else if (preg_match("/^p(ost)?_/",$m)) {
                $r=['verb'=>'POST','method'=>$m,'action'=>preg_replace("/^p(ost)?_/","",$m)];
                $fmethods['post'][] = $r;
            }
        }
        return $fmethods;
    }

    public static function route($controllerClass) {
        $methods = self::getMethods($controllerClass);
        foreach ($methods['get'] as $m) {
            $method = $m['method'];
            $action = $m['action'];
            Route::get($action,"$controllerClass@$route");
        }

        foreach ($methods['post'] as $m) {
            $method = $m['method'];
            $action = $m['action'];
            Route::post($action,"$controllerClass@$route");
        }
    }
}