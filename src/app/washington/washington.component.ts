import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  weatherData: any = {};

  constructor(private _httpService: HttpService){}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this._httpService.getCity('washington')
    .subscribe((data:any)=>{
      this.weatherData = data;          
    });
  }

}
