import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location/location.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LocationComponent
  }
];

@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})
export class LocationModule { }
