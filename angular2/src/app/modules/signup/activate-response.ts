import { SignupUser } from './signup-user'

export interface ActivateResponse {
    affected:number;
    activated:true;
    user:SignupUser;
}
