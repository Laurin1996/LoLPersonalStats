import { Controller, Get } from '@nestjs/common';

@Controller('stats')
export class StatsController {
  @Get('kda')
  getKDA(): number {
    return 10;
  }
}
