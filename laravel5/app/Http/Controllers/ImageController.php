<?php

namespace App\Http\Controllers;

use App\Exceptions\BadRequestException;
use App\Exceptions\NotFoundException;

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

    public function upload(Request $r) {
        if ($r->hasFile('image')) {
            if ($r->image->isValid()) {
                return Image::create($r->image->path());
            }
            throw new BadRequestException("Upload invalid or damaged");
        }
        throw new BadRequestException("Image not uploaded");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $image = Image::get($id);
        if (!$image) throw new NotFoundException('Image not found');
        return $image;
    }

    public function display($id) {
        $image = Image::display($id);
        $response = Response::make($image['bytes']);
        $response->header('Content-Type', $image['type']);
        return $response;
    }

    public function attach(Request $r) {
        $images = $r->input('images');
        $domain = $r->input('domain');
        $slug = $r->input('slug');

        if (empty($images)) throw new BadRequestException("image id's are required");
        if (empty($domain)) throw new BadRequestException("domain is required");
        if (empty($slug)  ) throw new BadRequestException("slug is required");
        return Image::attach($images, $domain, $slug);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Image::destroy($id);
    }
}
