import { User } from '../../../models/user'

export interface ActivateResponse {
    affected:number;
    activated:true;
    user:User;
}
