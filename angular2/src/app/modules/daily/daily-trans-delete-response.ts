import {DailyTrans} from './daily-trans'

export interface DailyTransDeleteResponse {
    affected:number;
    deleted:boolean;
    daily_trans:DailyTrans;
}
