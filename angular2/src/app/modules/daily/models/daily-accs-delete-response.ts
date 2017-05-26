import { DailyAccs } from '../../../models/daily-accs';

export interface DailyAccsDeleteResponse {
    affected:number;
    deleted:boolean;
    acc:DailyAccs;
}
