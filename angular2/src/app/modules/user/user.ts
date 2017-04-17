import { Record } from '../../record';

export interface IUser {
    username:string;
    fname:string;
    lname:string;
    email:string;
    birth?:Date;
    gender?:string;
    role?:string;
    status:string;
}

export class User extends Record implements IUser {
    username:string;
    fname:string;
    lname:string;
    email:string;
    birth?:Date;
    gender?:string;
    role?:string;
    status:string = 'ok';
}