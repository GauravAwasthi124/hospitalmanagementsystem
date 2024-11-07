import { ChangeDetectionStrategy, Component, signal, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { merge } from 'rxjs';
import { LoginService } from '../service/login/login.service';
import { MatDialog } from '@angular/material/dialog';
import { UserroleComponent } from 'src/app/shaired/userrole/userrole/userrole.component';
import { TokenserviceService } from 'src/app/shaired/service/tokenservice/tokenservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  errormessage!: string;
  toastr: any;
  constructor(private fb: FormBuilder, private login: LoginService, private router: Router, private token:TokenserviceService) {
    this.form = this.fb.group({
      email: this.email,
      password: ['', [Validators.required]]
    })
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }
  ngOnInit(): void {
  }
  errorMessage = signal('');
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
  message!: any;

  async submit(event: Event) {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.login.login(email, password).subscribe({
        next: (res: any) => {
          const refreshToken = res.tokens.refresh.token;
          this.token.saveToken(refreshToken);
          this.openDialog();
        },
        error: (err: any) => {
          this.message = "Invalid email or password";
        }
      });
    }
  }

  signup() {
    this.router.navigateByUrl('/auth/signup');
  }



  readonly dialog = inject(MatDialog);
  openDialog() {
    const dialogRef = this.dialog.open(UserroleComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
