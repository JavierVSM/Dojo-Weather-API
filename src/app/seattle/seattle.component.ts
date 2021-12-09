import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weatherData: any = {};

  constructor(private _httpService: HttpService){}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this._httpService.getCity('seattle')
    .subscribe((data:any)=>{
      this.weatherData = data;          
    });
  }
}
