@echo off

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

REM Create ZIP
7z a ..\output\aws\ua-laravel-vXX.zip -r * .[^.]* -xr!.env.example -xr!zip.bat -xr!config/database.*.php -xr!config/mail.*.php

REM Recover PREV Settings
rename config\database.php database.aws1.php
rename config\mail.php mail.aws1.php

rename config\database.tmp.php database.php
rename config\mail.tmp.php mail.php

REM Manage Build
set /p Build=<build_number.txt
set /a "Build=%Build%+1"
rename ..\output\aws\ua-laravel-vXX.zip ua-laravel-v%Build%.%RANDOM%.zip
echo %Build% > build_number.txt
