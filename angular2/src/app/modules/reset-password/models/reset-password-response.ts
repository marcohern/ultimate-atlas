import { User } from '../../../models/user';

export interface ResetPasswordResponse {
    affected: number;
    password_set: boolean;
    deleted: number;
    user: User;
}
