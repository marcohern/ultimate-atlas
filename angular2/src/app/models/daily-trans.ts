import { Record } from './record';

interface IDailyTrans {
    event_date: string;
    type: string;
    cat_id: number;
    user_id: number;
    value: number;
    from: string;
    to:string;
    from_acc:string;
    to_acc:string;
    category?: string;
    hypercat?: string;
    edate?: string;
    emonth?: string;
    eyear?: string;
}

export class DailyTrans extends Record implements IDailyTrans {
    event_date: string;
    type: string;
    cat_id: number;
    user_id: number;
    value: number;
    from: string;
    to:string;
    from_acc:string;
    to_acc:string;
    category?: string;
    hypercat?: string;
    edate?: string;
    emonth?: string;
    eyear?: string;
}