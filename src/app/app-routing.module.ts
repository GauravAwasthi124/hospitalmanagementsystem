import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './shaired/pagenotfound/pagenotfound.component';
import { authGuard } from './shaired/guard/auth.guard';
import { loginGuard } from './shaired/guard/login.guard';

const routes: Routes = [
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate:[authGuard]},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),canActivate:[loginGuard] },
  { path: 'pages/profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule), canActivate: [authGuard] },
  { path: 'shaired/userrole', loadChildren: () => import('./shaired/userrole/userrole.module').then(m => m.UserroleModule), canActivate: [authGuard] },
  { path: '', redirectTo: 'layout/main', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

