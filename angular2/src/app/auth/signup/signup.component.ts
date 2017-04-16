import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

import { SignupRequest } from '../signup-request';


@Component({
  selector: 'ua-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username:string = '';
  password:string = '';
  confirmPassword:string = '';
  fname:string = '';
  lname:string = '';
  email:string = '';
  role:string = '';

  constructor(private auth:AuthService, private router:Router) { }

  public ngOnInit() {
  }

  private onUsernameChange() {
    console.log("SignupComponent.onUsernameChange");
  }

  private signupUser() {
    var request:SignupRequest = {
      username: this.username,
      password: this.password,
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      role: this.role
    };

    this.auth.signup(request).subscribe(
      () => this.router.navigate(['/signup-done'])
    );
  }

}
