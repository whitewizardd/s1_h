// import { AppController } from './app.controller';
// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('api')
export class AppController {
  @Get('ip')
  getClientIp(@Req() request: Request): string {
    const ipAddress =
      request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    return `Client IP address: ${ipAddress[0]}`;
  }
}
