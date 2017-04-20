import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms'
import { areEqual } from '../../validators/equal.validator'
import { isUsenameUnique } from '../../validators/username-unique.validator'

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
    fname:'',
    lname:''
  }

  errorMessages = {
    fname: {
      required: 'First Name is required.'
    },
    lname: {
      required: 'Last Name is required.'
    },
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
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      role:  ['ADMIN', Validators.required]
    });

    this.signupForm.valueChanges.subscribe(data => this.onValueChanged(data));

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

  private checkIfDisplayErrorMessage(field:string) {
    this.errors[field] = '';
    const control = this.signupForm.get(field);
    if (control && control.dirty && !control.valid) {
      const messages = this.errorMessages[field];
      for (const key in control.errors) {
        this.errors[field] += messages[key] + ' ';
      }
    }
  } 

  public onValueChanged(data) {
    this.checkIfDisplayErrorMessage('password');
    this.checkIfDisplayErrorMessage('confirmPassword');
    this.checkIfDisplayErrorMessage('fname');
    this.checkIfDisplayErrorMessage('lname');
  }

  private signupUser(value:any) {
    console.log('Reactive Form Data: ')
    console.log(value);

    /*
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
    );*/
  }

}
