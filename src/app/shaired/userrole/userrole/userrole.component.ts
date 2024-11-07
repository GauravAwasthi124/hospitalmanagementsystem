import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShairedService } from '../../service/shaired/ShairedService';
import { ProfileService } from '../../service/profile/profile.service';

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserroleComponent implements OnInit {
  userRoles: string[] = [];

  constructor(private router: Router, private shaired: ShairedService, private profile: ProfileService) { }

  ngOnInit(): void {
    this.getuserrole();
  }

  redirect() {
    this.router.navigateByUrl('/layout/main');
  }

  getuserrole() {
    this.profile.profileUser().subscribe({
      next: (res: any) => {
        this.userRoles = JSON.parse(res.user_role);
        console.log(this.userRoles);
      },
      error: (err) => {
        console.error('Error fetching user roles:', err);
      }
    });
  }

}
