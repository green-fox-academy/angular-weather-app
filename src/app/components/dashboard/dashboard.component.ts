import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { City } from 'src/app/models/City';
import { APIWeather } from 'src/app/models/APIWeather';

import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { APIBulkWeather } from 'src/app/models/APIBulkWeather';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cities: Observable<City[]> = of([]);
  error: string | null;
  searchTerm: string;

  constructor(private weatherSvc: WeatherService) {}

  ngOnInit() {
    this.loadCities();
  }

  loadCityByName(cityName: string) {
    this.cities = this.weatherSvc.getCityByName(cityName).pipe(
      map((apiWeather: APIWeather) => {
        this.error = null;
        return [new City(apiWeather)];
      }),
      catchError(error => {
        this.error = `Couldn't find city`;
        return of([] as City[]);
      })
    );
  }

  loadCities(): void {
    this.cities = this.weatherSvc
      .getBulkCities()
      .pipe(
        map((apiBulkWeather: APIBulkWeather) =>
          apiBulkWeather.list.map((apiWeather: APIWeather) => new City(apiWeather))
        )
      );
  }

  onSearch(): void {
    this.loadCityByName(this.searchTerm);
  }
}
