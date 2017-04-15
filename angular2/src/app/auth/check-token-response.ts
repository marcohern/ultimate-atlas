import { Record } from '../record';

export interface ICheckTokenResponse {
    token:string;
    expires:Date;
    expired:string;
}


export class CheckTokenResponse extends Record implements ICheckTokenResponse {
    token:string;
    expires:Date;
    expired:string;
}