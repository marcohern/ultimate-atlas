import { Record } from '../../../models/record';

export interface Token {
    token: string;
    expired: Date;
    expires: string;
}
