import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Cat } from './cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  catUrl: string = `https://api.thecatapi.com/v1/images/search?limit=50&api_key=${environment.API_KEY}`;
  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]>{
    return this.http.get<Cat[]>(this.catUrl); 
  }


}
