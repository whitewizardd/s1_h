export const ip_info_url = (ip_address: string): string => {
  return `http://ip-api.com/json/${ip_address}`;
};

export const convert_temperature_to_celsius_from_kelvin = (
  temp_value: number,
): string => (temp_value - 273.15).toFixed();

export const weather_url = (location: string): string =>
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPENWEATHERMAP_API_KEY}`;
