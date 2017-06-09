<?php

use Illuminate\Database\Seeder;

use App\Lib\In;
use App\Models\Image;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = base_path().'/database/seeds/Images/';

        $files = [
            ['id' => 1, 'slug' => 'horsehead'   , 'filename' => '001_horsehead_nebula.jpg','type' => 'image/jpg'],
            ['id' => 2, 'slug' => 'eiffel_tower', 'filename' => '002_eiffel_tower.jpg'    ,'type' => 'image/jpg'],
        ];

        foreach ($files as $i => $file) {
            $filepath = $path.$file['filename'];
            $size = getimagesize($filepath);

            $file['width'] = $size[0];
            $file['height'] = $size[1];
            $file['bytes'] = file_get_contents($filepath);
            $file['created_at'] = In::now();

            $id = Image::insertGetId($file);
        }
    }
}
