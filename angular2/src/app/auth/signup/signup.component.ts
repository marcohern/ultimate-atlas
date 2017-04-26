import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms'

import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

import { SignupRequest } from '../signup-request';

@Component({
  selector: 'ua-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  usernameForm:FormGroup;
  active:boolean = false;
  errors = {
  }

  errorMessages = {
    role: {
      required: 'Role is required.'
    }
  }

  constructor(
    private auth:AuthService,
    private router:Router,
    private fb:FormBuilder)
  {
  }

  public ngOnInit() {
    console.log("SignupComponent.ngOnInit");

    this.signupForm = this.fb.group({
      role:  ['ADMIN', Validators.required]
    });

    this.active=true;
  }

  onUsernameGroup(username:FormGroup) {
    this.signupForm.addControl('username', username);
  }

  onEmailGroup(email:FormGroup) {
    this.signupForm.addControl('email', email);
  }
  
  onPasswordGroup(password:FormGroup) {
    this.signupForm.addControl('password',password);
  }

  onFirstNameGroup(fname:FormGroup) {
    this.signupForm.addControl('fname', fname);
  }

  onLastNameGroup(lname:FormGroup) {
    this.signupForm.addControl('lname', lname);
  }

  private signupUser(data:any) {
    console.log('Reactive Form Data: ');

    var request:SignupRequest = {
      username: data.username.value,
      password: data.password.value,
      fname: data.fname.value,
      lname: data.lname.value,
      email: data.email.value,
      role: data.role
    };
    console.log(request);

    this.auth.signup(request).subscribe(
      () => this.router.navigate(['/signup-done'])
    );
  }

}
