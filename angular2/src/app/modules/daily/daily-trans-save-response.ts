
import {DailyTrans} from './daily-trans'

export interface DailyTransSaveResponse {
    affected:number;
    saved:boolean;
    daily_trans:DailyTrans;
}

