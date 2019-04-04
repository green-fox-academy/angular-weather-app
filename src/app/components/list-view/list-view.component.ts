import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/app/models/City';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() city: City;
  country: string;
  temperature: number;
  icon: string;

  constructor() {
    this.country = 'UK';
    this.temperature = 14;
    this.icon = '01d';
  }

  ngOnInit() {}
}
