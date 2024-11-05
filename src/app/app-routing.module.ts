import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './shaired/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path:'pages', loadChildren:()=>import('./pages/profile/profile.module').then(m=>m.ProfileModule)},
  { path: '', redirectTo: 'layout/main', pathMatch: 'full' },
  { path: '**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

