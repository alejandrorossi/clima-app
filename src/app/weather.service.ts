import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  currentDate;

  constructor() {
    this.currentDate = new Date();
  }

  sumDays(num) {
    return this.currentDate.setDate(this.currentDate.getDate() + num)
  }

  getTodayInfo(){
    return {
      temperature:"35",
      precipitation: "10",
      humidity: "20",
      wind: "10",
      icon: '<i class="fas fa-cloud-sun"></i>'
    }
  }

  //the paremeter is the code of the place, the values are always the same because there is no backend
  getForecastOf(value: any) {

    return [
      
      {
        date: this.sumDays(1),
        precipitation: "20",
        temperature:"25",
        humidity: "30",
        wind: "10",
        icon: "fas fa-cloud-sun"
      },

      {
        date: this.sumDays(2),
        precipitation: "25",
        temperature:"26",
        humidity: "50",
        wind: "20",
        icon: "fas fa-sun"
      },

      {
        date: this.sumDays(3),
        precipitation: "30",
        temperature:"26",
        humidity: "50",
        wind: "30",
        icon:"fas fa-sun"
      },

      {
        date: this.sumDays(4),
        precipitation: "35",
        temperature:"28",
        humidity: "45",
        wind: "25",
        icon:"fas fa-sun"
      },

      {
        date: this.sumDays(5),
        precipitation: "45",
        temperature:"20",
        humidity: "80",
        wind: "30",
        icon: "fas fa-cloud-sun"
      },

      {
        date: this.sumDays(6),
        precipitation: "60",
        temperature:"26",
        humidity: "80",
        wind: "40",
        icon:"fas fa-cloud-sun-rai"
      },

      {
        date: this.sumDays(7),
        precipitation: "85",
        temperature:"18",
        humidity: "80",
        wind: "60",
        icon:"fas fa-cloud-sun-rain"
      },



    ]


  }

}
