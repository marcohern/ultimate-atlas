<?php

namespace App\Http\Controllers\Bars;

use App\Exceptions\NotFoundException;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class BarsController extends Controller
{
    private $bm;
    private $imm;

    public function __construct(
            \App\Bars\Bar $bm,
            \App\Models\Image $imm
    ) {
        $this->middleware('api');
        $this->middleware('secure');

        $this->bm = $bm;
        $this->imm = $imm;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $r)
    {
        
        $city_id  = $r->input('city_id');
        $q        = $r->input('q', '');
        $modified = $r->input("modified", '1990-01-01 00:00:00');
        $limit    = 0+$r->input('l', 10);
        $offset   = 0+$r->input('o',  0);
        
        return $this->bm->search($city_id, $q, $modified, $limit, $offset);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $r)
    {
        return $this->bm->create([
            'name' => $r->input('name'),
            'description' => $r->input('description'),
            'city_id' => $r->input('city_id'),
            'user_id' => $r->input('user_id'),
            'type' => $r->input('type'),
            'address' => $r->input('address'),
            'zip' => $r->input('zip'),
            'lat' => $r->input('lat'),
            'lng' => $r->input('lng'),
            'email' => $r->input('email'),
            'phone1' => $r->input('phone1'),
            'phone2' => $r->input('phone2'),
            'mobile' => $r->input('mobile'),
            'website' => $r->input('website'),
            'contact_name' => $r->input('contact_name'),

            'images' => $r->input('images'),
            
            'franhise_id' => $r->input('franhise_id'),
            'plan' => $r->input('plan'),
            'avg_price' => $r->input('avg_price'),
            'cover' => $r->input('cover'),
            'color' => $r->input('color'),
            'lat_ne' => $r->input('lat_ne'),
            'lng_ne' => $r->input('lng_ne'),
            'lat_sw' => $r->input('lat_sw'),
            'lng_sw' => $r->input('lng_sw')
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $r, $id)
    {
        return $this->bm->view($id,
            $r->input('p'),
            $r->input('d'),
            $r->root()
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $r, $id)
    {
        return $this->bm->modify($id, [
            'name' => $r->input('name'),
            'description' => $r->input('description'),
            'city_id' => $r->input('city_id'),
            'user_id' => $r->input('user_id'),
            'address' => $r->input('address'),
            'zip' => $r->input('zip'),
            'lat' => $r->input('lat'),
            'lng' => $r->input('lng'),
            'email' => $r->input('email'),
            'phone1' => $r->input('phone1'),
            'phone2' => $r->input('phone2'),
            'mobile' => $r->input('mobile'),
            'website' => $r->input('website'),
            'contact_name' => $r->input('contact_name'),
            
            'franhise_id' => $r->input('franhise_id'),
            'plan' => $r->input('plan'),
            'avg_price' => $r->input('avg_price'),
            'cover' => $r->input('cover'),
            'color' => $r->input('color'),
            'lat_ne' => $r->input('lat_ne'),
            'lng_ne' => $r->input('lng_ne'),
            'lat_sw' => $r->input('lat_sw'),
            'lng_sw' => $r->input('lng_sw')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $this->bm->erase($id);
    }
}
