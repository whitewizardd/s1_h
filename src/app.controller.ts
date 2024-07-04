import { Controller, Get, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly app_service: AppService) {}
  @Get('hello')
  getClientIp(
    @Req() request: Request,
    @Query('visitor_name') visitor_name: string,
  ): Promise<object> {
    const ipAddress =
      request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    return this.app_service.get_ip_address_and_location_and_temperature(
      ipAddress[0],
      visitor_name,
    );
  }
}
