export interface IRecord {
    id?:number;

    created_at?:Date;
    updated_at?:Date;
    status:string;
}

export class Record implements IRecord {
    id?:number;

    created_at?:Date;
    updated_at?:Date;
    status:string;
}