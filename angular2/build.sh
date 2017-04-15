rm -rf ../laravel5/public/tapi
rm -f ../laravel5/favicon.png
rm -f ../laravel5/*.js
rm -f ../laravel5/glyphicons-*
rm -f ../laravel5/*.json

ng build --env=prod

cp ./dist/favicon.png ../laravel5/public
cp ./dist/*.js ../laravel5/public
cp ./dist/glyphicons-* ../laravel5/public
cp ./dist/*.json ../laravel5/public
ditto ./dist/tapi ../laravel5/public/tapi
