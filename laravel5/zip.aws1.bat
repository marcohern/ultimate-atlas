@echo off

set VersionFile=config\version.php

REM Clear Cache
del ..\output\aws\ua-laravel-v*.zip
php artisan view:clear
php artisan cache:clear
php artisan config:cache
del bootstrap\cache\config.php

REM Prepare AWS1 Settings
rename config\database.php database.tmp.php
rename config\mail.php mail.tmp.php

rename config\database.aws1.php database.php
rename config\mail.aws1.php mail.php

REM Get Version Number
set /p Build=<version\build_number.txt
set /p Version=<version\version_number.txt
set Rnd=%RANDOM%
set /a Build=%Build%+0

REM Create ZIP
7z a ..\output\aws\ua-laravel-v%Version%.%Build%.%Rnd%.zip -r * .[^.]* -x@zip.aws1.excude
REM -xr!.env.example -xr!zip.*.bat -xr!config\database.*.php -xr!config\mail.*.php -xr!database\seeds -xr!database\migrations -x@version

REM Recover PREV Settings
rename config\database.php database.aws1.php
rename config\mail.php mail.aws1.php

rename config\database.tmp.php database.php
rename config\mail.tmp.php mail.php

REM Manage Build
set /a Build=%Build%+1
echo %Build% > version\build_number.txt

echo ^<?php> %VersionFile%
echo return [>> %VersionFile%
echo     'number' =^> '%Version%.%Build%.%Rnd%',>> %VersionFile%
echo     'branch' =^> '%Version%',>> %VersionFile%
echo     'build'  =^> '%Build%',>> %VersionFile%
echo     'rnd'    =^> '%Rnd%'>> %VersionFile%
echo ];>> %VersionFile%