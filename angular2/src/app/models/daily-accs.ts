
import { Record } from './record';

export interface IDailyAccs {
    user_id:number;
    bank:string;
    name:string;
    number:string;
    type:string;
    value:number;
}

export class DailyAccs extends Record implements IDailyAccs {
    user_id:number;
    bank:string;
    name:string;
    number:string;
    type:string;
    value:number;
}
