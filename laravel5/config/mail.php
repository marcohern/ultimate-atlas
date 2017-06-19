<?php

return [

    'driver'     => env('MAIL_DRIVER'),
    'host'       => env('MAIL_HOST'),
    'port'       => env('MAIL_PORT'),
    'encryption' => env('MAIL_ENCRYPTION'),
    'username'   => env('MAIL_USERNAME'),
    'password'   => env('MAIL_PASSWORD'),
    'from'       => [
        'address' => env('MAIL_FROM_ADDRESS','sender@marcohern.com'),
        'name'    => env('MAIL_FROM_NAME','Ultimate Atlas'),
    ],

    'sendmail' => '/usr/sbin/sendmail -bs',
    'markdown' => [
        'theme' => 'default',

        'paths' => [
            resource_path('views/vendor/mail'),
        ],
    ]

];