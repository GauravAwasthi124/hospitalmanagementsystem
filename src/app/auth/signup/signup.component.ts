import { ChangeDetectionStrategy, Component ,signal} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { merge } from 'rxjs';
import { SignupService } from '../service/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SignupComponent {
  signup!: FormGroup
  errorMessage = signal('');
  userrole = new FormControl('',[Validators.required]);

  toppingList: string[] = ['Clinic Admin', 'Patient', 'Doctor',];
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private fb: FormBuilder,private router: Router, private ser:SignupService) {
    this.signup = this.fb.group({
      email: this.email,
      password: ['', [Validators.required]],
      clinic_id:['',[Validators.required]],
      user_role: this.userrole,
    });
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  submit() {
    if (this.signup.valid) {
      const { email, password, clinic_id, user_role} = this.signup.value;
      this.ser.register(email, password, clinic_id, user_role).subscribe({
        next: (res: any) => {
          console.log(res);
          const refreshToken = res.tokens.refresh.token;
          localStorage.setItem('refresh_token', refreshToken);
          this.router.navigateByUrl('main');
        }
      })
    }
  }
}
