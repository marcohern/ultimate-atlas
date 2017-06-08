<?php

return [
    '_pivot_density' => 160,
    '_densities' => [
        //           dpi   x
        'ldpi'    => [120, 0.75],
        'mdpi'    => [160, 1.00],
        'hdpi'    => [240, 1.50],
        'xhdpi'   => [320, 2.00],
        'xxhdpi'  => [480, 3.00],
        'xxxhdpi' => [640, 4.00],
    ],
    '_screens' => [
        'small'    => [  426,  320],
        'normal'   => [  470,  320],
        'large'    => [  640,  480],
        'xlarge'   => [  960,  720],
        'xxlarge'  => [ 1920, 1080],
        'xxxlarge' => [ 1920, 1440],
    ],

    //sizes on 1x
    'cover'   => [480, 360],
    'ismall'  => [ 32,  32],
    'imedium' => [ 48,  48],
    'ilarge'  => [ 64,  64],
    'ihuge'   => [128, 128],
];

?>