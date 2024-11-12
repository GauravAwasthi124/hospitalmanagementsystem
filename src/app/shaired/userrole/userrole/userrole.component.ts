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
  userRoles: string[] | null = null;
  
  constructor(private router: Router, private token:TokenserviceService){}
  ngOnInit(): void {
    
  }
  
  redirect() {
    this.router.navigateByUrl('/layout/main');
  }
  clear() {
    this.token.clearaccToken();
    this.token.clearrefToken();
    this.token.clearuser_role();
    this.token.clearuserid();
  }
}
