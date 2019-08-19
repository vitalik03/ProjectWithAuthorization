import { UserRole } from "../enum/user-role.enum";

export class CreateUserDto{
    readonly username: String;
    readonly password: String;
    readonly role: UserRole;
}