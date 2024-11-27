import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddclinicComponent } from './addclinic/addclinic.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component:AddclinicComponent
  }
]

@NgModule({
  declarations: [
    AddclinicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AddclinicModule { 

}
