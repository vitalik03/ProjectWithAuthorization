import { Schema } from 'mongoose';
import { UserRole } from '../enum/user-role.enum';

export const UserSchema = new Schema({
    username: String,
    password: String,
    role: UserRole
});