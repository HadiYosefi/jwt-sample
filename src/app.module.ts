import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [AuthModule, SampleModule],
})
export class AppModule {}
