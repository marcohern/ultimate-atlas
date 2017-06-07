<?php

namespace App\Daily;

use Illuminate\Database\Eloquent\Model;
use App\Lib\In;

class DailyAccs extends Model
{
    //
    public static function updateSnapshots($user_id, $from, $to, $cvalue, $pvalue) {
        if ($from == 'POCKET') {
            self::add($user_id, 'POCKET', $cvalue, $pvalue);
            if ($to == 'DEBIT') {
                self::sub($user_id, 'DEBIT', $cvalue, $pvalue);
            }
            if ($to == 'CREDIT') {
                self::sub($user_id, 'CREDIT', $cvalue, $pvalue);
            }
            if ($to == 'STASH') {
                self::sub($user_id, 'STASH', $cvalue, $pvalue);
            }
        }
        if ($to == 'POCKET') {
            self::add($user_id, 'POCKET', $cvalue, $pvalue);
            if ($from == 'DEBIT') {
                self::sub($user_id, 'DEBIT', $cvalue, $pvalue);
            }
            if ($from == 'CREDIT') {
                self::sub($user_id, 'CREDIT', $cvalue, $pvalue);
            }
            if ($from == 'STASH') {
                self::sub($user_id, 'STASH', $cvalue, $pvalue);
            }
        }
    }

    public static function add($user_id, $type, $cvalue, $pvalue) {
        $acc = self::where('user_id',$user_id)->where('type',$type)->first();
        if (!$acc) {
            $id = self::insertGetId([
                'user_id' => $user_id,
                'type' => $type,
                'name' => $type,
                'bank' => 'DEFAULT',
                'number' => '000-00000-0',
                'acctype' => 'SAVINGS',
                'value' => 0,
                'created_at' => In::now()
            ]);
            $acc = self::where('id',$id)->first();
        }
        $acc->value = $acc->value + ($cvalue - $pvalue);
        
        self::where('id',$acc->id)->update([
            'value' => $acc->value
        ]);
    }

    public static function sub($user_id, $type, $cvalue, $pvalue) {
        $acc = self::where('user_id',$user_id)->where('type',$type)->first();
        if (!$acc) {
            $id = self::insertGetId([
                'user_id' => $user_id,
                'type' => $type,
                'name' => $type,
                'bank' => 'DEFAULT',
                'number' => '000-00000-0',
                'acctype' => 'SAVINGS',
                'value' => 0,
                'created_at' => In::now()
            ]);
            $acc = self::where('id',$id)->first();
        }
        $acc->value = $acc->value - ($cvalue - $pvalue);
        
        self::where('id',$acc->id)->update([
            'value' => $acc->value
        ]);
    }


}
