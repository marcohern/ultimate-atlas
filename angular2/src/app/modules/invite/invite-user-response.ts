import {InviteUser} from './invite-user';

export interface InviteUserResponse {
    invited:boolean;
    user:InviteUser;
    token:string;
}
