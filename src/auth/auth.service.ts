import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService:JwtService

    ){
    }
    async login(userDto:UserDto):Promise<string>{
        if(userDto.username  !="1" || userDto.password !="1")
            throw new NotFoundException()
        const payload={id:1,username:userDto.username,role:"admin"}
        const token=await this.jwtService.sign(payload)
        return token

     }
}


export class UserDto{
    username:string
    password:string
}
