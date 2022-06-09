import { Controller, Get } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('test')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('test')
  async test() {
    return await this.userService.findAll();
  }
}
