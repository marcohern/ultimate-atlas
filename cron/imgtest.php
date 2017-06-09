<?php

$file = "1000_parque_barrio_sm.jpg";

$path = "../laravel5/database/seeds/Images/";

$data = file_get_contents($path.$file);
$data = base64_encode($data);
file_put_contents($path.$file.".base64", $data);

/*
$data = file_get_contents("../laravel5/database/seeds/Images/1000_parque_barrio.jpg.base64");
$data = base64_decode($data);
file_put_contents("../laravel5/database/seeds/Images/1000_parque_barrio.jpg", $data);
*/
echo "Done!\n";
