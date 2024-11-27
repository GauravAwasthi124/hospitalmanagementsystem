import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenserviceService } from '../../service/tokenservice/tokenservice.service';

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserroleComponent implements OnInit {
  userRoles!: any;
  selectedRole!: string; 

  constructor(private router: Router, private token: TokenserviceService) {}
  ngOnInit(): void {
    this.userrole();
  }

  async userrole() {
    const roles = this.token.getuser_role();
    if (roles) {
      this.userRoles = JSON.parse(roles);
    }
  }

  redirect() {
    if (this.selectedRole) {
      this.token.saveuser_role(this.selectedRole);
      this.router.navigateByUrl('/layout/main');
    } else {
      alert('Please select a user role');
    } 
  }

  clear() {
    this.token.clearaccToken();
    this.token.clearrefToken();
    this.token.clearuser_role();
    this.token.clearuserid();
  }
}
