import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients/patients.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { StatusPipe } from 'src/app/shaired/pipe/status/status.pipe';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component:PatientsComponent
  }
]
@NgModule({
  declarations: [
    PatientsComponent,
    StatusPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    RouterModule.forChild(routes),
  ]
})
export class PatientsModule { }
