<?php

use Illuminate\Database\Seeder;

use App\Lib\In;
use App\Image;

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
            [
                'id' => 1,
                'profile' => 'original',
                'density' => 'original',
                'slug' => 'horsehead',
                'index' => 0,
                'filename' => '001_horsehead_nebula.jpg',
                'type' => 'image/jpg',
                'width' => 0,
                'height' => 0,
                'parent_id' => null,

                'created_at' => In::now()
            ]
        ];

        foreach ($files as $i => $file) {
            $filepath = $path.$file['filename'];
            $size = getimagesize($filepath);

            $file['width'] = $size[0];
            $file['height'] = $size[1];

            $id = Image::insertGetId($file);

            $data = addslashes(file_get_contents($filepath));

            DB::statement("UPDATE images SET bytes = '$data' WHERE id = $id");
        }
    }
}
