import { Injectable } from '@nestjs/common';
import { ip_info_url } from './dto/request_api';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  get_ip_address_and_location_and_temperature = async (
    ip_address,
    visitor_name: string
  ): Promise<object> => {
    console.log(ip_address);
    const location = (await axios.get(ip_info_url(ip_address))).data;
    console.log(location);
    return {
      client_ip: ip_address,
      location: location.city,
      greeting: `Hello ${visitor_name}`,
    };
  };
}
