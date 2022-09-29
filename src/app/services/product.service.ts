import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iss } from '../common/iss';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl:string = "http://localhost:8080/api/iss/"
  private nowUrl:string = "http://localhost:8080/api/now"

  constructor(private httpClient:HttpClient) { }

  getIss():Observable<Iss> {
    return this.httpClient.get<Iss>(this.baseUrl + 27);
  }
  getCurrentIss():Observable<Iss> {
    return this.httpClient.get<Iss>(this.nowUrl);
  }
}
