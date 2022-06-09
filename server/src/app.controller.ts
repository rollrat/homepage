import { Controller, Get, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<number> {
    // return await this.photoService.findAll();
    return 0;
  }
}
