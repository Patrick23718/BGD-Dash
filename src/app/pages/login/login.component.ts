import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  user = {
    email: '',
    password: '',
  };
  constructor(
    private formBuilder: FormBuilder,
    private userService: UtilisateursService,
    private localstorage: LocalstorageService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.loginForm = this.formBuilder.group({
      email: formBuilder.control('', [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+$' /*'^[A-Z0-9._%-]+@[A-Z0-9.-]+.[A-Z]{2,4}$'*/
        ),
      ]),
      password: formBuilder.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {
    this.openSnackBar('Cannonball!!');
  }

  openSnackBar(msg: any) {
    this._snackBar.open(msg, '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['bg-primary', 'text-white'],
    });
  }

  onSubmit() {
    this.userService
      .userLogin(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.role === 'admin') {
            this.localstorage.set('x-access-token', res.accessToken);
            this.localstorage.set(
              'utilisateur',
              JSON.stringify({ role: res.role, id: res.id })
            );
            this.router.navigate(['dashboard']);
          }
        },
        (err: any) => {
          this.openSnackBar(err.error.message);
        }
      );
  }
  control(name: string) {
    return this.loginForm.get(name);
  }
}
