import { Component, OnInit } from '@angular/core';
import { TokenserviceService } from 'src/app/shaired/service/tokenservice/tokenservice.service';
import { Store } from '@ngrx/store';
import { loadUser } from 'src/app/shaired/state/actions/users.actions';
import { selectUserState } from 'src/app/shaired/state/selectors/users.selector';
import { StatusPipe } from "../../../shaired/pipe/status/status.pipe";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  
})
export class ProfileComponent implements OnInit {
  profileData: any;
  userRole!: string

  constructor(
    private store: Store,
    private token: TokenserviceService
  ) { }

  ngOnInit(): void {
    const userId = this.token.getuserid();
    const selectedRole = this.token.getuser_role();

    if (selectedRole && selectedRole.length > 0)
    {
      this.userRole = selectedRole;
    }
    if (userId) {
      this.store.dispatch(loadUser({ id: + userId }));
      this.store.select(selectUserState).subscribe((state) => {
        this.profileData = state.userbyid;
      });
    }
  }
}
