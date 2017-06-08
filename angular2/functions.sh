#!/bin/bash

delete_build_files() {
    echo "\033[1;32mDeleting files in destination \033[0m"
    rm -rf ../laravel5/public/tapi
    rm -rf ../laravel5/public/assets/loaders
    rm -f  ../laravel5/public/favicon.png
    rm -f  ../laravel5/public/*.js
    rm -f  ../laravel5/public/glyphicons-*
    rm -f  ../laravel5/public/*.json
}

send_build_files() {
    echo "\033[1;32mCopying build files \033[0m"
    cp ./dist/favicon.png  ../laravel5/public
    cp ./dist/*.js         ../laravel5/public
    cp ./dist/glyphicons-* ../laravel5/public
    cp ./dist/*.json       ../laravel5/public
    ditto ./dist/tapi      ../laravel5/public/tapi
    ditto ./dist/assets/loaders    ../laravel5/public/assets/loaders
}

build_files_dev() {
    echo "\033[1;33mBuilding for TEST \033[0m"
    ng build --env=test
}
build_files_prod() {
    echo "\033[1;33mBuilding for PROD \033[0m"
    ng build --env=prod
}