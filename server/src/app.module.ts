import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FxController } from './fx/fx.controller';
import { FxService } from './fx/fx.service';

@Module({
  imports: [],
  controllers: [AppController, FxController],
  providers: [AppService, FxService],
})
export class AppModule {}
