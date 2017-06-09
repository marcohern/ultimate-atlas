@echo off

echo Testing Variables
set Rnd=%RANDOM%
set /p Seq=<build_number.txt
set /a Seq=%Seq%+0
set /p Version=<version_number.txt
echo ^<?php> version.php
echo return [>> version.php
echo 'version' =^> '%Version%.%Seq%.%Rnd%',>> version.php
echo 'ver'     =^> '%Version%',>> version.php
echo 'build'   =^> '%Seq%',>> version.php
echo 'rnd'     =^> '%Rnd%'>> version.php
echo ];>> version.php