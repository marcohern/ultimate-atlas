﻿function UA-DeleteBuildFiles() {
    Write-Host "Deleting files in destination"
    $prefix = "..\laravel5\public"
    Remove-Item -Recurse -Force "$prefix/tapi"
    Remove-Item -Recurse -Force "$prefix/assets"
    Remove-Item -Force "$prefix/favicon.png"
    Remove-Item -Force "$prefix/*.js"
    Remove-Item -Force "$prefix/glyphicons-*"
    Remove-Item -Force "$prefix/*.json"
}

function UA-PublishBuildFiles() {
    Write-Host "Copying build files"
    $prefix = ".\dist"
    $dest = "..\laravel5\public"
    Copy-Item -Recurse "$prefix/tapi"  $dest
    Copy-Item -Recurse "$prefix/assets"  $dest
    Copy-Item "$prefix/favicon.png"  $dest
    Copy-Item "$prefix/*.js"  $dest
    Copy-Item "$prefix/glyphicons-*"  $dest
    Copy-Item "$prefix/*.json"  $dest
}

function UA-BuildDev() {
    Write-Host "Building for DEV"
    ng build
}

function UA-BuildProd() {
    Write-Host "Building for PROD"
    ng build --env=prod
}