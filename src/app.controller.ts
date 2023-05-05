import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: Logger,
  ) {
    logger.log('Using v3');
    const a = [];
    for (let i = 0; i < 90000000000; i++) {
      for (let x = 0; x < 9000000000; x++) {
        a.push(i);
      }
    }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
