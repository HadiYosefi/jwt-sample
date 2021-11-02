import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuardCustom } from 'src/decorator/role-guard.decorator';
import { JwtGuard } from 'src/guard/jwt.guard';

@Controller('sample')
export class SampleController {

    @RoleGuardCustom('superadmin')
    @UseGuards(JwtGuard)
    @Get()
    sayHello(){
        return "hello world"
    }
}
