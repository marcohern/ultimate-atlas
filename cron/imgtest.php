<?php

$data = file_get_contents("../laravel5/database/seeds/Images/002_eiffel_tower.jpg");
$data = base64_encode($data);
file_put_contents("../laravel5/database/seeds/Images/002_eiffel_tower.jpg.base64", $data);
echo "Done!\n";