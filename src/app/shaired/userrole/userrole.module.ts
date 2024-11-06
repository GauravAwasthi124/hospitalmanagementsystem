import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserroleComponent } from './userrole/userrole.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
const routes: Routes = [
  {
    path: '',
    component:UserroleComponent
  }
]

@NgModule({
  declarations: [
    UserroleComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UserroleComponent
  ]
})
export class UserroleModule { }