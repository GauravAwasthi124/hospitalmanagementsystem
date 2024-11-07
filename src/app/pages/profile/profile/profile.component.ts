import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shaired/service/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLast(role: string, roles: string[]): boolean {
    return roles.indexOf(role) === roles.length - 1;
  }
  profileData!: any;
  constructor(private data: ProfileService) { }
  ngOnInit(): void {
    this.profile();
  }
  async profile() {
    this.data.profileUser().subscribe({
      next: (res: any) => {
        console.log(res);
        this.profileData = res;

      }
    })
  }
}
