import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/database/user.service';

@Controller('test')
export class TestController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async test() {
    return await this.usersService.findAll();
  }
}
