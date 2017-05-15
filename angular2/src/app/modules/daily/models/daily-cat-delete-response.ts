import {DailyCat} from '../../../models/daily-cat'

export interface DailyCatDeleteResponse {
    affected:number;
    deleted:boolean;
    daily_cat:DailyCat;
}

