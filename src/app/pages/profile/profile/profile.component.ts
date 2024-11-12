import { Component, OnInit } from '@angular/core';
import { TokenserviceService } from 'src/app/shaired/service/tokenservice/tokenservice.service';
import { Store } from '@ngrx/store';
import { loadUser } from 'src/app/shaired/state/actions/users.actions';
import { selectUserState } from 'src/app/shaired/state/selectors/users.selector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData: any;

  constructor(
    private store: Store,
    private token: TokenserviceService
  ) { }

  ngOnInit(): void {
    const userId = this.token.getuserid();
    console.log(userId);
    if (userId) {
      this.store.dispatch(loadUser({ id: + userId }));
      this.store.select(selectUserState).subscribe((state) => {
        this.profileData = state.userbyid;
        console.log(this.profileData)
      });
    }
  }
}
