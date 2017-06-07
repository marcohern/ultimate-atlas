﻿function Remove-UABuildFiles() {
    Write-Host "Deleting files in destination"
    $prefix = "..\laravel5\public"
    Remove-Item -Recurse -Force "$prefix/tapi"
    Remove-Item -Recurse -Force "$prefix/assets/loaders"
    Remove-Item -Force "$prefix/favicon.png"
    Remove-Item -Force "$prefix/*.js"
    Remove-Item -Force "$prefix/*.map"
    Remove-Item -Force "$prefix/glyphicons-*"
    Remove-Item -Force "$prefix/*.json"
}

function Publish-UABuildFiles() {
    Write-Host "Copying build files"
    $prefix = ".\dist"
    $dest = "..\laravel5\public"
    Copy-Item -Recurse "$prefix/tapi"  $dest
    Copy-Item -Recurse -Force "$prefix/assets"  $dest
    Copy-Item "$prefix/favicon.png"  $dest
    Copy-Item "$prefix/*.js"  $dest
    Copy-Item "$prefix/*.map"  $dest
    Copy-Item "$prefix/glyphicons-*"  $dest
    Copy-Item "$prefix/*.json"  $dest
}

function Start-BuildDev() {
    Write-Host "Building for TEST"
    ng build --env=test
}

function Start-BuildProd() {
    Write-Host "Building for PROD"
    ng build --env=prod
}