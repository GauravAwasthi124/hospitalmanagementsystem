import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './service/profile/profile.service';
import { SignupComponent } from './signup/signup.component';
import { MatSelectModule } from '@angular/material/select';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: 'signup',
    component:SignupComponent
  }
];
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    ProfileService
  ]
})
export class AuthModule { }
