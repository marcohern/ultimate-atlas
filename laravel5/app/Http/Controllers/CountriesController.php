<?php

namespace App\Http\Controllers;

use App\Exceptions\NotFoundException;
use Illuminate\Http\Request;

use App\Models\Country;

class CountriesController extends Controller
{
    private $cm;

    public function __construct(Country $cm) {
        $this->middleware('api');
        $this->middleware('secure');

        $this->cm = $cm;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->cm->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $r)
    {
        return $this->cm->create([
            'name' => $r->input('name'),
            'iso2' => $r->input('iso2'),
            'currency' => $r->input('currency'),
            'lat' => $r->input('lat'),
            'lng' => $r->input('lng')
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->cm->view($id);
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
        return $this->cm->modify($id, [
            'name' => $r->input('name'),
            'iso2' => $r->input('iso2'),
            'currency' => $r->input('currency'),
            'lat' => $r->input('lat'),
            'lng' => $r->input('lng')
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
        return $this->cm->erase($id);
    }
}
