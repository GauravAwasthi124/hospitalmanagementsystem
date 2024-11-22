import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracttionerComponent } from './practtioner/practtioner.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:PracttionerComponent
  }
]

@NgModule({
  declarations: [
    PracttionerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PracttionerModule { }
