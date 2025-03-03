import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicComponent } from './clinic/clinic.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:ClinicComponent
  }
]
@NgModule({
  declarations: [
    ClinicComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ClinicModule { }
