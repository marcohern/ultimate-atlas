<?php

namespace App\Http\Controllers\Daily;

use App\Exceptions\UAException;
use App\Exceptions\NotFoundException;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Daily\DailyTrans;

class DailyTransController extends Controller
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
        //
        $trans = DailyTrans::get();
        return $trans;
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
            $id = DailyTrans::insertGetId([
                'event_date' => $r->input('event_date'),
                'cat_id'     => $r->input('cat_id'),
                'user_id'    => $r->input('user_id'),
                'value'      => $r->input('value'),
                'type'       => $r->input('type'),

                'created_at' => new \Datetime("now")
            ]);

            $trans = DailyTrans::where('id', $id)->first();

            return [
                'affected' => 1,
                'saved' => true,
                'daily_trans' => $trans
            ];
        } catch (PDOException $ex) {
            throw new BadRequestException("Error storing daily transaction", 400, $ex);
        } catch (Exception $ex) {
            throw new BadRequestException("Error storing daily transaction", 400, $ex);
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
        $trans = DailyTrans::where('id',$id)->first();
         if (!$trans) throw new NotFoundException('Transaction not found');
        return ['daily_trans' => $trans];
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
            $affected = DailyTrans::where('id', $id)
                ->update([
                    'event_date' => $r->input('event_date'),
                    'cat_id' => $r->input('cat_id'),
                    'user_id' => $r->input('user_id'),
                    'value' => $r->input('value'),
                    'type' => $r->input('type'),

                    'updated_at' => new \Datetime("now")
                ]
            );
            $trans = DailyTrans::where('id', $id)->first();
            return [
                'affected' => $affected,
                'saved' => true,
                'daily_trans' => $trans
            ];
        } catch (PDOException $ex) {
            throw new BadRequestException("Error updating daily transaction", 400, $ex);
        } catch (Exception $ex) {
            throw new BadRequestException("Error updating daily transaction", 400, $ex);
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
        $trans = DailyTrans::where('id',$id)->first();
        if (!$trans) throw new NotFoundException('Daily Transaction not found');
        $affected = DailyTrans::where('id', $id)->delete();
        return [
            'affected' => $affected,
            'deleted' => true,
            'daily_trans' => $trans
        ];
    }
}
