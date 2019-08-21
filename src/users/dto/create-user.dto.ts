import { UserRole } from "../enum/user-role.enum";

export class CreateUserDto{
    readonly username: string;
    readonly password: string;
    readonly role: string;
}