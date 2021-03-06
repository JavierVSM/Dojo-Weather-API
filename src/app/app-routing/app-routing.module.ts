import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './../seattle/seattle.component';
import { SanjoseComponent } from './../sanjose/sanjose.component';
import { BurbankComponent } from './../burbank/burbank.component';
import { DallasComponent } from './../dallas/dallas.component';
import { WashingtonComponent } from './../washington/washington.component';
import { ChicagoComponent } from './../chicago/chicago.component';

let routes: Routes = [
  {
    path: 'seattle',
    component: SeattleComponent
  },
  {
    path: 'sanjose',
    component: SanjoseComponent
  },
  {
    path: 'burbank',
    component: BurbankComponent
  },
  {
    path: 'dallas',
    component: DallasComponent
  },
  {
    path: 'dc',
    component: WashingtonComponent
  },
  {
    path: 'chicago',
    component: ChicagoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
