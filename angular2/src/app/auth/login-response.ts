import { LoginUser } from './login-user';

export interface LoginResponse {
    user:LoginUser;
    token:string;
}

