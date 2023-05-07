import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: Logger,
  ) {
    logger.log('Using v3');
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
