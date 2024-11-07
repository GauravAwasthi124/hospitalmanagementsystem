import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { StatusPipe } from 'src/app/shaired/pipe/status/status.pipe';

const routes: Routes = [
  {
    path: '',
    component:ProfileComponent
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    StatusPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProfileModule { }
