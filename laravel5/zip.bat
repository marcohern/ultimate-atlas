php artisan view:clear
php artisan cache:clear
php artisan config:cache
del bootstrap\cache\config.php
7z a ..\output\aws\ua-laravel-vXX.zip -r * .[^.]* -xr!.env -xr!.env.example
