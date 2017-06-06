del ..\output\aws\ua-laravel-v*.zip
php artisan view:clear
php artisan cache:clear
php artisan config:cache
del bootstrap\cache\config.php
7z a ..\output\aws\ua-laravel-vXX.zip -r * .[^.]* -xr!.env -xr!.env.example
set /p Build=<build_number.txt
set /a "Build=%Build%+1"
rename ..\output\aws\ua-laravel-vXX.zip ua-laravel-v%Build%.zip
echo %Build% > build_number.txt
