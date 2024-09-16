import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  httpClient: HttpClient;

  constructor(httpClient : HttpClient){ this.httpClient = httpClient }
  getRestaurants() {
    return this.httpClient.request('GET',"assets/restaurants.json", {responseType:'json'});
  }
}