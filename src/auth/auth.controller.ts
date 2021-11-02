import { Body, Controller, Post } from '@nestjs/common';
import { AuthService, UserDto } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService:AuthService
    ){

    }

    @Post('login')
    async login(@Body() userDto:UserDto):Promise<string>{
        return this.authService.login(userDto)
    }
}
