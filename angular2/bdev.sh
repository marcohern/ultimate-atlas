rm -rf ../laravel5/public/tapi
rm -f ../laravel5/public/favicon.png
rm -f ../laravel5/public/*.js
rm -f ../laravel5/public/glyphicons-*
rm -f ../laravel5/public/*.json

ng build

cp ./dist/favicon.png ../laravel5/public
cp ./dist/*.js ../laravel5/public
cp ./dist/glyphicons-* ../laravel5/public
cp ./dist/*.json ../laravel5/public
ditto ./dist/tapi ../laravel5/public/tapi
