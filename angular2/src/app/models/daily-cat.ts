import { Record } from './record'

export interface DailyCat {
    name:string;
}

export class DailyCat extends Record implements DailyCat {
    name:string;
}
