import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../service/sidenav/sidenav.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/auth/service/profile/profile.service';
import { LogoutService } from '../service/logout/logout.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
  
export class HeaderComponent implements OnInit {
  profile!: any;
  token = localStorage.getItem('refresh_token');
  constructor(private sidebar: SidebarService, private router: Router, private pro: ProfileService, private lgout: LogoutService) { }
  ngOnInit(): void {
    this.profiledata();
  }
  toggleSidebar() {
    this.sidebar.toggleSidebar();
  }

  async logout() {
    this.lgout.logout(this.token).subscribe({
      next: (res: any) => {
        localStorage.removeItem('refresh_token');
        this.router.navigateByUrl('/auth/login');
      }
    })
  }

  async profiledata() {
    this.pro.profileUser(this.token).subscribe({
      next: (res: any) => {
        this.profile = res;
      }
    })
  }

  async Profile() {
    this.router.navigateByUrl('/pages/profile');
  }
  async main() {
    this.router.navigateByUrl('/layout/main');
  }
}
