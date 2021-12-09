import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { 
  }
  
  getCity(id: any){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${id}&appid=834a69795987fd9e4a1db863c8abcd0c`);
  }
}