import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iss } from '../common/iss';
import { Person } from '../common/person';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl:string = "https://iss-app-version1.herokuapp.com/api/iss/"
  private nowUrl:string = "https://iss-app-version1.herokuapp.com/api/now"
  private peopleUrl:string = "https://iss-app-version1.herokuapp.com/api/people"

  constructor(private httpClient:HttpClient) { }

  getIss():Observable<Iss> {
    return this.httpClient.get<Iss>(this.baseUrl + 27);
  }
  getCurrentIss():Observable<Iss> {
    return this.httpClient.get<Iss>(this.nowUrl);
  }
  getCurrentPeople():Observable<Person[]>{
    let people = this.httpClient.get<GetResponse>(this.peopleUrl).pipe(map(response => response.people));
    return people;
  }
}
interface GetResponse {
  people: Person[]
}
