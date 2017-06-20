<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\State;

class StatesController extends Controller
{
    private $sm;

    public function __construct(State $sm) {
        $this->middleware('api');
        $this->middleware('secure');

        $this->sm = $sm;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $r)
    {
        return $this->sm->search(
            $r->input('country_id'),
            $r->input('name'),
            $r->input('l',50),
            $r->input('o',0)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $r
     * @return \Illuminate\Http\Response
     */
    public function store(Request $r)
    {
        return $this->sm->create([
            'name'       => $r->input('name'),
            'country_id' => $r->input('country_id'),
            'lat'        => $r->input('lat'),
            'lng'        => $r->input('lng')
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
        return $this->sm->view($id);
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
        return $this->sm->modify($id, [
            'name'       => $r->input('name'),
            'country_id' => $r->input('country_id'),
            'lat'        => $r->input('lat'),
            'lng'        => $r->input('lng')
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
        return $this->sm->erase($id);
    }
}
