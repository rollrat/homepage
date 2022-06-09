import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { FxController } from './fx/fx.controller';
import { FxService } from './fx/fx.service';
import { TestModule } from './test/test.module';

@Module({
  imports: [DatabaseModule, TestModule],
  controllers: [AppController, FxController],
  providers: [AppService, FxService],
})
export class AppModule {}
