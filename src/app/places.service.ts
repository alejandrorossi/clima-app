import { Injectable } from '@angular/core';
import { Place } from './model/Place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  places: Place[];

  constructor() {

    this.places = [
      {
        country: "Argentina",
        name: "Mendoza",
        code: "me"
      },
      {
        country: "Argentina",
        name: "Buenos Aires",
        code: "bs"
      },
      {
        country: "Colombia",
        name: "Bogotá",
        code: "bo"
      },
      {
        country: "Perú",
        name: "Lima",
        code: "li"
      }
    ]
  }



  getAllPlaces() {
    return this.places;
  }

}
