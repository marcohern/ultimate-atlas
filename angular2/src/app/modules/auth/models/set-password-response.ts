
import { User } from '../../../models/user';

export class SetPasswordResponse {
    affected: number;
    pasword_set: boolean;
    deleted: number;
    user: User;
}