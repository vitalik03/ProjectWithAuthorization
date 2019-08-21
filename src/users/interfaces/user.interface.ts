import { UserRole } from "../enum/user-role.enum";

export interface IUser{
    username: string;
    password: string;
    role: string;
}