import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from 'src/guard/jwt.guard';
import { JwtStrategy } from 'src/strategy/jwt.strategy';

@Module({
  imports:[
    JwtModule.register({
      secret:'123456',
      signOptions:{
        expiresIn:'3600s'
      }
    })
  ],
  providers: [AuthService,JwtGuard,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
