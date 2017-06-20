import { Record } from './record';

export interface IBar {
    name: string;
    slug?: string;
}

export class Bar extends Record implements IBar {
    name: string;
    slug?: string;
    
}
