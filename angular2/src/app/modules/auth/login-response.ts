import { User } from '../../models/user'
import { Token } from './token'

export interface LoginResponse {
    user:User;
    token:Token;
}