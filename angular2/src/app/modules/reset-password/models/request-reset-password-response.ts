
import { User } from '../../../models/user'
import { PasswordReset } from '../../../models/password-reset'

export interface RequestResetPasswordResponse {
    affected:number;
    created:boolean;
    password_reset:PasswordReset;
    user:User;
}
