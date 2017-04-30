import { SignupUser } from './signup-user';

export interface SignupResponse {
    signedUp:boolean;
    user:SignupUser;
}
