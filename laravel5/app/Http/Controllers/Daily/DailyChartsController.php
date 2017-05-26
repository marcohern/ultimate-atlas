<?php

namespace App\Http\Controllers\Daily;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Daily\DailyDay;

class DailyChartsController extends Controller
{
    public function days(Request $r) {
        
        $days = DailyDay::where('user_id',$r->input('user_id'))
            ->where('day','>=',$r->input('start'))
            ->where('day','<=',$r->input('end'))
            ->orderBy('day','ASC')
            ->get();
        
        return $days;
    }
}
