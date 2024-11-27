import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shaired/guard/auth.guard';
import { loginGuard } from './shaired/guard/login.guard';
import { PagenotfoundComponent } from './shaired/pagenotfound/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [authGuard] },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [loginGuard] },
  { path: 'pages/clinic', loadChildren: () => import('./pages/clinic/clinic.module').then(m => m.ClinicModule), canActivate: [authGuard] },
  { path: 'pages/location', loadChildren: () => import('./pages/location/location.module').then(m => m.LocationModule), canActivate: [authGuard] },
  { path: 'pages/patients', loadChildren: () => import('./pages/patients/patients.module').then(m => m.PatientsModule), canActivate: [authGuard] },
  { path: 'pages/profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule), canActivate: [authGuard] },
  {path:'pages/practtioner',loadChildren:()=>import('./pages/practtioner/practtioner.module').then(m=>m.PracttionerModule),canActivate:[authGuard]},
  { path: 'shaired/userrole', loadChildren: () => import('./shaired/userrole/userrole.module').then(m => m.UserroleModule), canActivate: [authGuard] },
  {path:'shaired/addclinic',loadChildren:()=>import('./shaired/addclinic/addclinic.module').then(m=>m.AddclinicModule),canActivate:[authGuard]},
  { path: '', redirectTo: 'layout/main', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

