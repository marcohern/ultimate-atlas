import { LoginUser } from './login-user'
import { Token } from './token'

export interface LoginResponse {
    user:LoginUser;
    token:Token;
}