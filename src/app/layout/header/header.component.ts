import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../service/sidenav/sidenav.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/shaired/service/profile/profile.service';
import { LogoutService } from '../service/logout/logout.service';
import { TokenserviceService } from 'src/app/shaired/service/tokenservice/tokenservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  profile!: any;
  token: string | null = '';
  constructor(
    private sidebar: SidebarService,
    private router: Router,
    private pro: ProfileService,
    private lgout: LogoutService,
    private tokenservice: TokenserviceService
  ) { }


  ngOnInit(): void {
    this.token = this.tokenservice.getToken();
    // this.profiledata();
  }


  toggleSidebar() {
    this.sidebar.toggleSidebar();
  }

  async logout() {
    this.lgout.logout(this.token).subscribe({
      next: (res: any) => {
        this.tokenservice.clearToken();
        this.router.navigateByUrl('/auth/login');
      }
    })
  }

  // async profiledata() {
  //   this.pro.profileUser(this.token).subscribe({
  //     next: (res: any) => {
  //       this.profile = res;
  //     }
  //   })
  // } 

  async Profile() {
    this.router.navigateByUrl('/pages/profile');
  }

  async main() {
    this.router.navigateByUrl('/layout/main');
  }
}
