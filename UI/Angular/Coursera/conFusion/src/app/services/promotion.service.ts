import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of, Observable } from 'rxjs';
import { delay , map , catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from "../shared/baseurl";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http : HttpClient, private processHttpService : ProcessHTTPMsgService) { }

  getPromotions() : Observable<Promotion[]>
  {
    return this.http.get<Promotion[]>(baseURL+'promotions').pipe(catchError(this.processHttpService.handleError));    
  }

  getPrmotion(id : string) : Observable<Promotion>
  {
    return this.http.get<Promotion>(baseURL+'promotions/'+id).pipe(catchError(this.processHttpService.handleError));
  }

  getFeturedPromotion() : Observable<Promotion>
  {
    return this.http.get<Promotion>(baseURL+'promotions?featured=true').pipe(map(promo => promo[0])).pipe(catchError(this.processHttpService.handleError));
  }

}
