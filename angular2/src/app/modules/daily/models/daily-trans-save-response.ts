
import {DailyTrans} from '../../../models/daily-trans'

export interface DailyTransSaveResponse {
    affected:number;
    saved:boolean;
    daily_trans:DailyTrans;
}

