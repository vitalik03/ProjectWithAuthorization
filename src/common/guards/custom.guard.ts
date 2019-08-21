import { Injectable, CanActivate, ExecutionContext, HttpException } from "@nestjs/common";
import { UserRole } from "src/users/enum/user-role.enum";

@Injectable()
export class CustomGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        console.log(user);
        if(user && (user.role === "ADMIN")){
            return true;
        }
        throw new HttpException("You have not got acess to this",403);
    }
}