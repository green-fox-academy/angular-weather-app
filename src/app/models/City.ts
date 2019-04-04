import { APIWeather } from './APIWeather';

export class City {
  name: string;
  country: string;
  temperature: number;
  icon: string;

  constructor(apiWeather: APIWeather) {
    this.name = apiWeather.name;
    this.country = apiWeather.sys.country;
    this.temperature = apiWeather.main.temp;
    this.icon = apiWeather.weather[0].icon;
  }
}
