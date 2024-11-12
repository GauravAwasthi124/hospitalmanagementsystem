import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../service/sidenav/sidenav.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/shaired/service/profile/profile.service';
import { LogoutService } from '../service/logout/logout.service';
import { ReftokenService } from 'src/app/auth/service/reftoken/reftoken.service';
import { TokenserviceService } from 'src/app/shaired/service/tokenservice/tokenservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  profile!: any;
  constructor(
    private sidebar: SidebarService,
    private router: Router,
    private pro: ProfileService,
    private lgout: LogoutService,
    private ref: ReftokenService,
    private token:TokenserviceService
  ) {}


  ngOnInit(): void {
    
  }

  checktoken() {
    this.ref.refreshtoken().subscribe({
      next: (res: any) => {
        const access = res.access.token;
        const refresh = res.refresh.token;
        this.token.saveaccToken(access);
        this.token.saverefToken(refresh);
      }
    })
  }

  toggleSidebar(){
    this.sidebar.toggleSidebar();
  }

  async logout() {
    this.lgout.logout().subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('/auth/login');
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
