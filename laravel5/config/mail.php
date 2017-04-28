<?php

return [

    'driver'     => env('MAIL_DRIVER'    ,'smtp'),
    'host'       => env('MAIL_HOST'      ,'smtp.mailtrap.io'),
    'port'       => env('MAIL_PORT'      , 465),
    'encryption' => env('MAIL_ENCRYPTION','tls'),
    'username'   => env('MAIL_USERNAME'  ,'10ea4226b0bc83'),
    'password'   => env('MAIL_PASSWORD'  ,'be58ab3a9fb4c2'),
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