import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';


@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  listeRestaurants: Restaurant[] = [];
  constructor(private http: HttpClient) { }

  getRestaurant() {
    return this.http.get<{ restaurant: Restaurant[] }>('../assets/data/restaurant.json')
  }
}
