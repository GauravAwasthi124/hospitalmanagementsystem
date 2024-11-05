import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MainComponent } from './main/main.component';
import { MatSelectModule } from '@angular/material/select';
const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  }
];
@NgModule({
  declarations: [ 
    HeaderComponent,
    SidenavComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutModule {}
