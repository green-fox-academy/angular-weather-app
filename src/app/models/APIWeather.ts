export interface APIWeather {
  weather: [{ icon: string }];
  main: { temp: number };
  sys: { country: string };
  name: string;
}
