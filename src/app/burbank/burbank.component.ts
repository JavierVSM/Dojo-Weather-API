import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weatherData: any = {};

  constructor(private _httpService: HttpService){}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this._httpService.getCity('burbank')
    .subscribe((data:any)=>{
      this.weatherData = data;          
    });
  }

}
