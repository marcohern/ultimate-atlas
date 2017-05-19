import { Record } from './record';


export interface IDailyDay {
    day:string;
    user_id:number;
    type:string;
    none:number;
    transport:number;
    food:number;
    purchases:number;
    sortie:number;
    other:number;
    input:number;
    output:number;
    balance:number;
}


export class DailyDay extends Record implements IDailyDay {
    day:string;
    user_id:number;
    type:string;
    none:number;
    transport:number;
    food:number;
    purchases:number;
    sortie:number;
    other:number;
    input:number;
    output:number;
    balance:number;
}
