#!/bin/bash
@echo off

VersionFile="config/version.php"

# Clear Cache
rm -f ../output/aws/ua-laravel-v*.zip
php artisan view:clear
php artisan cache:clear
php artisan config:cache
rm -f bootstrap/cache/config.php

# Prepare AWS1 Settings
mv config/database.php config/database.tmp.php
mv config/mail.php config/mail.tmp.php

mv config/database.aws1.php config/database.php
mv config/mail.aws1.php config/mail.php

# Get Version Number
Build=$(cat version/build_number.txt)
Version=$(cat version/version_number.txt)
Rnd=$RANDOM

# Create ZIP
zip ../output/aws/ua-laravel-v$Version.$Build.$Rnd.zip -r * .[^.]* -x@zip.aws1.exclude
# echo "Example Zip">../output/aws/ua-laravel-v$Version.$Build.$Rnd.zip 
# -xr!.env.example -xr!zip.*.bat -xr!config\database.*.php -xr!config\mail.*.php -xr!database\seeds -xr!database\migrations -x@version

# Recover PREV Settings
mv config/database.php config/database.aws1.php
mv config/mail.php config/mail.aws1.php

mv config/database.tmp.php config/database.php
mv config/mail.tmp.php config/mail.php

# Manage Build
Build=$(($Build+1))
echo $Build>version/build_number.txt

echo "<?php "> $VersionFile
echo "return [ ">> $VersionFile
echo "   'number' => '$Version.$Build.$Rnd',">> $VersionFile
echo "   'branch' => '$Version',">> $VersionFile
echo "   'build'  => '$Build',">> $VersionFile
echo "   'rnd'    => '$Rnd'">> $VersionFile
echo "];">> $VersionFile