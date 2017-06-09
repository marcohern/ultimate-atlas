<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Lib\Dpi;
use App\Lib\In;
use App\Models\Image;
use InterventionImage;

class ImageController extends Controller
{

    public function __construct() {
        $this->middleware('api');
    }

    public function get_image_all($domain, $profile, $density, $slug, $index) {
        $img = Image::make($domain, $slug, $profile, $density, $index);

        $response = Response::make($img);
        $response->header('Content-Type', 'image/jpg');
        return $response;
    }

    public function get_image_pds($domain, $profile, $density, $slug) {
        $img = Image::make($domain, $slug, $profile, $density, 0);

        $response = Response::make($img);
        $response->header('Content-Type', 'image/jpg');
        return $response;
    }

    public function get_image_sdi($domain, $slug, $index) {
        $img = Image::make($domain, $slug, 'original', 'original', $index);

        $response = Response::make($img);
        $response->header('Content-Type', 'image/jpg');
        return $response;
    }

    public function get_image_sd($domain, $slug) {
        $img = Image::make($domain, $slug, 'original', 'original', 0);

        $response = Response::make($img);
        $response->header('Content-Type', 'image/jpg');
        return $response;
    }

    public function get_image_si($slug, $index) {
        $img = Image::make('global', $slug, 'original', 'original', 0);

        $response = Response::make($img);
        $response->header('Content-Type', 'image/jpg');
        return $response;
    }

    public function get_image_s($slug) {
        $img = Image::make('global', $slug, 'original', 'original', 0);

        $response = Response::make($img);
        $response->header('Content-Type', 'image/jpg');
        return $response;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $r)
    {
        return Image::query($r->input('q'),true);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $r)
    {
        ini_set('memory_limit', '512M');
        $domain = $r->input('domain');
        $slug = $r->input('slug');
        $index = $r->input('index');
        $image = InterventionImage::make($r->input('bytes'));

        if (empty($domain)) $domain = 'global';
        if (empty($index)) $index = 0;
        //
        $id = Image::insertGetId([
            'attached' => 'FALSE',
            'domain' => $domain,
            'slug' => $r->input('slug'),
            'index' => $r->input('index'),
            'profile' => 'original',
            'density' => 'original',
            'filename' => "$domain-$slug-$index.jpg",
            'type' => 'image/jpg',
            'width' => $image->width(),
            'height' => $image->height(),
            'parent_id' => null,
            
            'bytes' => $image->encode('jpg'),

            'created_at' => In::now()
        ]);

        $imager = Image::where('id',$id)->first();
        return $imager;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        /*
        $record = Image::where('id',$id)->select(['type','filename','width','height','bytes'])->first();
        
        $response = Response::make($record['bytes']);
        $response->header('Content-Type', $record['type']);
        return $response;
        */
        return Image::get($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
