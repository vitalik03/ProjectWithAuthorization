import { UserRole } from "../enum/user-role.enum";

export interface IUser{
    username: String;
    password: String;
    role: UserRole;
}