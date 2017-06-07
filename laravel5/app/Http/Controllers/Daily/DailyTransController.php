<?php

namespace App\Http\Controllers\Daily;

use App\Exceptions\UAException;
use App\Exceptions\NotFoundException;
use App\Exceptions\BadRequestException;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Daily\DailyAccs;
use App\Daily\DailyTrans;
use App\Lib\In;

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
    public function index(Request $r)
    {
        $user_id = $r->input('user_id');
        
        //
        $query = DailyTrans::leftJoin('daily_cats', 'daily_trans.cat_id', '=','daily_cats.id')
            ->select(
                'daily_trans.*',
                DB::raw('DATE(daily_trans.event_date) AS edate'),
                DB::raw('TIME(daily_trans.event_date) AS etime'),
                DB::raw('LEFT(daily_trans.event_date,7) AS emonth'),
                DB::raw('YEAR(daily_trans.event_date) AS eyear'),
                'daily_cats.name AS category',
                'daily_cats.hypercat')
            ->orderBy('event_date','DESC')->take(50);
        if (!empty($user_id)) {
            $query->where('user_id',$user_id);
        }
        $trans = $query->get();
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
                'from'       => $r->input('from'),
                'to'         => $r->input('to'),
                'from_acc'   => null,
                'to_acc'     => null,

                'created_at' => In::now()
            ]);

            DailyAccs::updateSnapshots($r->input('user_id'), $r->input('from'), $r->input('to'), 0+$r->input('value'), 0);

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
            $trans = DailyTrans::where('id', $id)->first();

            $affected = DailyTrans::where('id', $id)
                ->update([
                    'event_date' => $r->input('event_date'),
                    'cat_id' => $r->input('cat_id'),
                    'user_id' => $r->input('user_id'),
                    'value' => $r->input('value'),
                    'type' => $r->input('type'),

                    'from'       => $r->input('from'),
                    'to'         => $r->input('to'),
                    'from_acc'   => null,
                    'to_acc'     => null,

                    'updated_at' => In::now()
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

        DailyAccs::updateSnapshots($trans->user_id, $trans->from, $trans->to, -$trans->value, 0);

        $affected = DailyTrans::where('id', $id)->delete();
        return [
            'affected' => $affected,
            'deleted' => true,
            'daily_trans' => $trans
        ];
    }
}
