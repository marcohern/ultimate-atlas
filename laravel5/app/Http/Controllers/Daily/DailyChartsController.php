<?php

namespace App\Http\Controllers\Daily;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Daily\DailyDay;

class DailyChartsController extends Controller
{
    public function days($user_id, $start,$end) {
        $days = DailyDay::where('user_id',$user_id)
            ->where('day','>=',$start)
            ->where('day','<=',$end)
            ->orderBy('day','ASC')
            ->get();
        
        return $days;
    }
}
