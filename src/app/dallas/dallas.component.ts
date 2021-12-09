import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weatherData: any = {};

  constructor(private _httpService: HttpService){}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this._httpService.getCity('dallas')
    .subscribe((data:any)=>{
      this.weatherData = data;          
    });
  }

}
