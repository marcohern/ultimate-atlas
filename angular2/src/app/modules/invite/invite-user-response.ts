import {InviteUser} from './invite-user';

export interface InviteUserResponse {
    affected?:number;
    invited?:boolean;
    user?:InviteUser;
}
