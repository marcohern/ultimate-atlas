import { User } from '../../../models/user';

export interface UserDeleteResponse {
    affected: number;
    deleted: boolean;
    user: User;
}
