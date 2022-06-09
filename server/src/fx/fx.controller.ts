import { Controller, Get, Param } from '@nestjs/common';
import { FxService } from './fx.service';

@Controller('fx')
export class FxController {
  constructor(private readonly fxService: FxService) {}

  @Get('list')
  async getAvailableCurrencyList(): Promise<string[]> {
    return await this.fxService.getAvailableCurrencyList();
  }

  @Get('all')
  async getAllCurrencyPrice() {
    return await this.fxService.getAllCurrencyPrice();
  }

  @Get(':cur')
  async getCurrenyPrice(@Param('cur') cur: string): Promise<string> {
    return await this.fxService.getFxInfoByCurrency(cur);
  }
}
