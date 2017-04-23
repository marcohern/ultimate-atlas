<?php

namespace App\Http\Controllers\Daily;

use App\Exceptions\UAException;
use App\Exceptions\NotFoundException;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Daily\DailyCat;

class DailyCatsController extends Controller
{
    public function __construct() {
        $this->middleware('api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cats = DailyCat::get();
        return $cats;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $r)
    {
        //
        try {
            $id = DailyCat::insertGetId([
                'name'     => $r->input('name'),
                'hypercat' => $r->input('hypercat'),

                'created_at' => new \Datetime("now")
            ]);

            $cats = DailyCat::where('id', $id)->first();

            return [
                'affected' => 1,
                'saved' => true,
                'daily_cat' => $cats
            ];
        } catch (PDOException $ex) {
            throw new BadRequestException("Error storing daily category", 400, $ex);
        } catch (Exception $ex) {
            throw new BadRequestException("Error storing daily category", 400, $ex);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $cat = DailyCat::where('id',$id)->first();
         if (!$cat) throw new NotFoundException('Daily Category not found');
        return ['daily_cat' => $cat];
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
    public function update(Request $r, $id)
    {
        //
        try {
            $affected = DailyCat::where('id', $id)
                ->update([
                    'name'     => $r->input('name'),
                    'hypercat' => $r->input('hypercat'),

                    'updated_at' => new \Datetime("now")
                ]
            );
            $cat = DailyCat::where('id', $id)->first();
            return [
                'affected' => $affected,
                'saved' => true,
                'daily_cat' => $cat
            ];
        } catch (PDOException $ex) {
            throw new BadRequestException("Error updating daily category", 400, $ex);
        } catch (Exception $ex) {
            throw new BadRequestException("Error updating daily category", 400, $ex);
        }
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
        $cat = DailyCat::where('id',$id)->first();
        if (!$cat) throw new NotFoundException('Daily Category not found');
        $affected = DailyCat::where('id', $id)->delete();
        return [
            'affected' => $affected,
            'deleted' => true,
            'daily_cat' => $cat
        ];
    }
}
