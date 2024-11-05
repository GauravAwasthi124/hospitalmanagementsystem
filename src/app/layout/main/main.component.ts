import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarService } from '../service/sidenav/sidenav.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  token = localStorage.getItem('refresh_token');
  isSidebarVisible = true;
  isLoginPage = true;
  isSignup = true;
  notfound = true;
  constructor(private sidebarService: SidebarService, private router: Router) { }

  ngOnInit() {
    if (!this.token) {
      this.router.navigateByUrl('/auth/login');
    }
    this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
      console.log(isVisible)
      this.isSidebarVisible = isVisible;
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url.includes('/auth/login');
        this.isSignup = this.router.url.includes('/auth/signup');
        this.notfound = this.router.url === '/pagenotfound';
      }
    });
  }
}
