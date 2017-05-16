import { Record } from './record';

export interface IPasswordReset {
    email: string;
    token: string;
    expires: Date;
}

export class PasswordReset extends Record implements IPasswordReset {
    email: string;
    token: string;
    expires: Date;
}