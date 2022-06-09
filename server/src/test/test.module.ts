import { Module } from '@nestjs/common';
import { UsersModule } from 'src/database/user.module';
import { TestController } from './test.controller';

@Module({ imports: [UsersModule], controllers: [TestController] })
export class TestModule {}
