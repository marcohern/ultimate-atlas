import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';

import { ErrorMessageService } from '../../inputs/error-message.service';
import { AuthService } from '../auth.service';

@Component({
  moduleId: module.id,
  selector: 'ua-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFailed = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private ems: ErrorMessageService) { }

  ngOnInit() {
    this.loginForm = this.ems.build({
      username: {
        control: ['', Validators.required],
        messages: {required: 'Username is Required.'}
      },
      password: {
        control: ['', Validators.required],
        messages: {required: 'Password is Required.'}
      }
    });
  }

  login(value) {
    this.loginFailed = false;
    this.auth.login(value.username, value.password).subscribe(
      () => this.router.navigate(['/welcome']),
      error => this.loginFailed = true
    );
  }

}
