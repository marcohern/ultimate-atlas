import { User } from '../../../models/user';

export interface UserSaveResponse {
    affected: number;
    saved: boolean;
    user: User;
}
