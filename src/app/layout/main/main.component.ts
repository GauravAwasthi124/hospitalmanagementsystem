import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarService } from '../service/sidenav/sidenav.service';
import { ShairedService } from 'src/app/shaired/service/shaired/ShairedService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  isSidebarVisible = true;
  isLoginPage = true;
  isSignup = true;
  notfound = false;
  data!: any;
  constructor(private sidebarService: SidebarService, private router: Router, private shaired:ShairedService) { }
  ngOnInit() {
    this.data = this.shaired.tokenAuthentication();
    this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
      console.log(isVisible)
      this.isSidebarVisible = isVisible;
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url.includes('/auth/login');
        this.isSignup = this.router.url.includes('/auth/signup');
        this.notfound = this.router.url==='/pagenotfound';
      }
    });
  }
}
