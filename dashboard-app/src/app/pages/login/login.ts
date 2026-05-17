import { Component, inject } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
})
export class LoginComponent {
  private fb = inject(FormBuilder);

  private router = inject(Router);

  private snackBar = inject(MatSnackBar);

  isLoading = false;

  errorMessage = '';
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],

    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[A-Z])(?=.*[0-9]).{6,}$'),
      ],
    ],
  });

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();

      return;
    }

    const email = this.loginForm.value.email;

    const password = this.loginForm.value.password;

    if (email === 'admin@gmail.com' && password === 'Admin@123') {
      localStorage.setItem('token', 'dummy-jwt-token');

      this.snackBar.open(
        'Login Successful',

        'Close',

        {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        },
      );

      this.router.navigate(['/products']);
    } else {
      this.snackBar.open(
        'Invalid Credentials',

        'Close',

        {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        },
      );
    }
  }

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }
}
