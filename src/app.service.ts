import { Injectable } from '@nestjs/common';
import {
  ip_info_url,
  weather_url,
  convert_temperature_to_celsius_from_kelvin,
} from './dto/request_api';
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
    const temp = (await axios.get(weather_url(location.city))).data.main.temp;
    const temperature: string = convert_temperature_to_celsius_from_kelvin(+temp);

    return {
      client_ip: ip_address,
      location: location.city,
      greeting: generate_greeting(visitor_name, temperature, location.city),
    };
  };
}

const generate_greeting = (
  visitor_name: string,
  temp: string,
  location: string,
): string => {
  return `Hello, ${visitor_name}!, the temperature is ${temp} degrees Celcius in ${location}`;
};
