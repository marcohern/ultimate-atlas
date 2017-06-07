<?php

return [

    'driver'     => env('SES_DRIVER'),
    'host'       => env('SES_HOST'),
    'port'       => env('SES_PORT'),
    'encryption' => env('SES_ENCRYPTION'),
    'username'   => env('SES_USERNAME'),
    'password'   => env('SES_PASSWORD'),
    'from'       => [
        'address' => env('MAIL_FROM_ADDRESS', 'sender@marcohern.com'),
        'name'    => env('MAIL_FROM_NAME'   , 'Ultimate Atlas'),
    ],

    'sendmail' => '/usr/sbin/sendmail -bs',
    'markdown' => [
        'theme' => 'default',

        'paths' => [
            resource_path('views/vendor/mail'),
        ],
    ]

];