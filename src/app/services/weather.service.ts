import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { APIWeather } from '../models/APIWeather';
import { City } from '../models/City';
import { APIBulkWeather } from '../models/APIBulkWeather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCityByName(cityName: string): Observable<APIWeather> {
    const { apiKey, cityByNameUrl, metricParam } = environment;
    return this.http.get<APIWeather>(`${cityByNameUrl}${cityName}${metricParam}${apiKey}`);
  }

  getBulkCities(): Observable<APIBulkWeather> {
    const { apiKey, randomCitiesUrl, metricParam } = environment;
    return this.http.get<APIBulkWeather>(`${randomCitiesUrl}${apiKey}`);
  }
}
