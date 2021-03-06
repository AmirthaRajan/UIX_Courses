import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { baseURL } from "../shared/baseurl";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http : HttpClient, private processHttpService : ProcessHTTPMsgService) { }

  getDishes() : Observable<Dish[]>
  {
    return this.http.get<Dish[]>(baseURL+'dishes').pipe(catchError(this.processHttpService.handleError));    
  }

  getDish(id : string) : Observable<Dish>
  {
    return this.http.get<Dish>(baseURL+'dishes/'+id).pipe(catchError(this.processHttpService.handleError));
  }

  getFeaturedDish() : Observable<Dish>
  {
    return this.http.get<Dish>(baseURL+'dishes?featured=true').pipe(map(dishes => dishes[0])).pipe(catchError(this.processHttpService.handleError));
  }

  getDishIds() : Observable<string[] | any>
  {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id))).pipe(map(error => error));
  }

  putDish(dish : Dish) : Observable<Dish>
  {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    return this.http.put<Dish>(baseURL+'dishes/'+dish.id,dish,httpOptions).pipe(catchError(this.processHttpService.handleError));
  }
}
