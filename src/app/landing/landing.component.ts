import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Place } from '../model/Place';
import { PlacesService } from '../places.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  myControl = new FormControl();
  curDate: Date = new Date();
  allPlaces: Place[];
  options: string[] = [];
  places: Observable<string[]>;
  futureDays :any;
  today: any;

  constructor(private placesSrv: PlacesService, private weatherSrv: WeatherService) {

    this.allPlaces = this.placesSrv.getAllPlaces();

    for (let p of this.allPlaces) {
      this.options.push(p.country + '/' + p.name);
    }

    this.today = this.weatherSrv.getTodayInfo();
  }

  ngOnInit() {

    this.places = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  search() {
    this.futureDays = this.weatherSrv.getForecastOf(this.myControl.value);
  }

}
