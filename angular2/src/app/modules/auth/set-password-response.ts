
import { LoginUser } from './login-user';

export class SetPasswordResponse {
    affected:number;
    pasword_set:boolean;
    deleted:number;
    user:LoginUser;
}