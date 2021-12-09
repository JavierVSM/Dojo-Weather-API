import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weatherData: any = {};

  constructor(private _httpService: HttpService){}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this._httpService.getCity('san jose')
    .subscribe((data:any)=>{
      this.weatherData = data;          
    });
  }
}
