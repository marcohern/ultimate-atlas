import { LoginUser } from './login-user'

export interface ActivateResponse {
    affected:number;
    activated:true;
    user:LoginUser;
}
