import { User } from '../../../models/user';

export interface InviteUserResponse {
    invited:boolean;
    user:User;
    token:string;
}
