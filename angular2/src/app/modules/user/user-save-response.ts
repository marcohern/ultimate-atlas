import {User} from './user';

export interface UserSaveResponse {
    affected:number;
    saved:boolean;
    user:User;
}
