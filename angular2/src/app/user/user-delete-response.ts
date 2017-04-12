import { User } from './user';

export interface UserDeleteResponse {
    deleted:boolean;
    user:User;
}
