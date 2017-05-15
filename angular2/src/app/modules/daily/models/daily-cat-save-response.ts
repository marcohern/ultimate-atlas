import {DailyCat} from '../../../models/daily-cat'

export interface DailyCatSaveResponse {
    affected:number;
    saved:boolean;
    daily_cat:DailyCat;
}