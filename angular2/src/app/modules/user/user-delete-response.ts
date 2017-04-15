import { User } from './user';

export interface UserDeleteResponse {
    affected:number;
    deleted:boolean;
    user:User;
}
