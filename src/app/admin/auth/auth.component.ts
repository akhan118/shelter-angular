import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '@appCore/services/login.service';
import { UserDetailsService } from '@appCore/services/user-details.service';

@Component({
  selector: 'sa-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private userDetails: UserDetailsService
  ) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submitForm(form) {
    this.loginService.login(form.value.userName, form.value.password)
      .subscribe((loginResponse) => {
        this.userDetails.accessToken = loginResponse['access_token'];
        this.userDetails.username = loginResponse['username'];
        this.router.navigate(['/admin/home']);
      },
      (error) => {
        console.error('Error logging into app:', error)
      });
  }

}
