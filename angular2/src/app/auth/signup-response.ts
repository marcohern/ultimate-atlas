import { LoginUser } from './login-user';

export interface SignupResponse {
    signedUp:boolean;
    user:LoginUser;
}
