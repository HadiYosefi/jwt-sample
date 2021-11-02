import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { UserDto } from "src/auth/auth.service";
import { ROLE } from "src/decorator/role-guard.decorator";

export class RoleGuard implements CanActivate{
    constructor(
        private readonly reflector:Reflector
    ){

    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roleNames=this.reflector.getAllAndOverride(ROLE,[
            context.getClass(),
            context.getHandler()
        ])

        if(!roleNames)
        return true

        const {user}=context.switchToHttp().getRequest()
        for(let role of roleNames){
            if(user.role===role)
            return true
        }
        return false


    }
    
}