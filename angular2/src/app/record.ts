export interface IRecord {
    id?:number;

    created:Date;
    updated?:Date;
}

export class Record implements IRecord {
    id?:number;

    created:Date;
    updated?:Date;
}