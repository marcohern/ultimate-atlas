<?php

namespace App\Http\Controllers\Daily;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Daily\DailyAccs;
use App\Lib\In;

use App\Exceptions\UAException;
use App\Exceptions\NotFoundException;
use App\Exceptions\BadRequestException;

class DailyAccsController extends Controller
{
    //
    public function __construct() {
        $this->middleware('api');
    }

    public function index(Request $r) {
        $user_id = $r->input('user_id');
        $accs = DailyAccs::where('user_id',$user_id)->get();
        return $accs;
    }

    public function create() {}
    public function edit($id) {}

    public function store(Request $r) {

        $id = DailyAccs::insertGetId([
            'user_id' => $r->input('user_id'),
            'bank' => $r->input('bank'),
            'name' => $r->input('name'),
            'number' => $r->input('number'),
            'type' => $r->input('type'),
            'value' => $r->input('value'),

            'created_at' => In::now(),
            'updated_at' => null
        ]);
        
        $acc = DailyAccs::where('id',$id)->first();
        return [
            'affected' => 1,
            'saved' => true,
            'acc' => $acc
        ];
    }

    public function show($id) {
        $accs = DailyAccs::where('id', $id)->first();
        if (empty($accs)) throw new NotFoundException("Account not found.");
        return ['accs' => $accs];
    }

    public function update(Request $r, $id) {
        $af = DailyAccs::where('id',$id)->update([
            'user_id' => $r->input('user_id'),
            'name' => $r->input('name'),
            'number' => $r->input('number'),
            'type' => $r->input('type'),
            'value' => $r->input('value'),

            'updated_at' => In::now()
        ]);
        if ($af==0) throw new NotFoundException("Account not found.");
        $acc = DailyAcc::where('id',$id)->first();
        
        return [
            'affected' => $af,
            'saved' => true,
            'acc' => $acc
        ];
    }

    public function destroy($id) {
        $acc = DailyAccs::where('id',$id)->first();
        if (empty($acc)) throw new NotFoundException("Account not found.");
        $af = DailyAccs::where('id',$id)->delete();
        return [
            'affected' => $af,
            'deleted' => true,
            'acc' => $acc
        ];
    }
}
