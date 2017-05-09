import { Record } from './record'

interface IDailyTrans {
    event_date:Date;
    type:string;
    cat_id:number;
    user_id:number;
    value:number;
    category?:string;
    hypercat?:string;
    edate?:string;
    emonth?:string;
    eyear?:string;
}

export class DailyTrans extends Record implements IDailyTrans {
    event_date:Date;
    type:string;
    cat_id:number;
    user_id:number;
    value:number;
    category?:string;
    hypercat?:string;
    edate?:string;
    emonth?:string;
    eyear?:string;
}