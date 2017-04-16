#!/bin/bash

delete_build_files() {
    rm -rf ../laravel5/public/tapi
    rm -rf ../laravel5/public/assets
    rm -f  ../laravel5/public/favicon.png
    rm -f  ../laravel5/public/*.js
    rm -f  ../laravel5/public/glyphicons-*
    rm -f  ../laravel5/public/*.json
}

send_build_files() {
    cp ./dist/favicon.png  ../laravel5/public
    cp ./dist/*.js         ../laravel5/public
    cp ./dist/glyphicons-* ../laravel5/public
    cp ./dist/*.json       ../laravel5/public
    ditto ./dist/tapi      ../laravel5/public/tapi
    ditto ./dist/assets    ../laravel5/public/assets
}

build_files_dev() {
    ng build
}
build_files_prod() {
    ng build --env=prod
}