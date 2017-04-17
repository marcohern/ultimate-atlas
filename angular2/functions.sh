#!/bin/bash

delete_build_files() {
    echo "\033[1;32mDeleting files in destination \033[0m"
    rm -rf ../laravel5/public/tapi
    rm -rf ../laravel5/public/assets
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
    ditto ./dist/assets    ../laravel5/public/assets
}

build_files_dev() {
    echo "\033[1;33mBuilding for DEV \033[0m"
    ng build --env=remdev
}
build_files_prod() {
    echo "\033[1;34mBuilding for PROD \033[0m"
    ng build --env=prod
}