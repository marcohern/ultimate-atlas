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
    username: '',
    usernameWorking:false,
    usernameValid:false,
    password:'',
    confirmPassword:'',
    fname:'',
    lname:'',
    email:''
  }

  errorMessages = {
    password:{
      required: 'Password is required.'
    },
    confirmPassword: {
      mustBeEqualTo: 'Password confirmation does not match.'
    },
    fname: {
      required: 'First Name is required.'
    },
    lname: {
      required: 'Last Name is required.'
    },
    email: {
      required: 'Email is required.',
      email: 'Email must have valid format.'
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
    this.usernameForm = this.fb.group({
      username: ['', Validators.required, isUsenameUnique],
    });

    this.signupForm = this.fb.group({
      usernameGroup: this.usernameForm,
      password: ['', Validators.required],
      confirmPassword:  ['', [
        Validators.required,
        (c) => { return areEqual(c, "password")}
      ]],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      role:  ['ADMIN', Validators.required]
    });

    this.signupForm.valueChanges.subscribe(data => this.onValueChanged(data));
    //this.usernameForm.statusChanges.subscribe(data => this.onUsernameChange(data));
    this.usernameForm.statusChanges.subscribe(status => this.onUsernameStatusChange(status));

    this.active=true;
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
    this.checkIfDisplayErrorMessage('email');
    this.errors.username = '';
    this.errors.usernameValid = false;
    //console.log("SignupComponent.onValueChanged",data);
  }

  private onUsernameStatusChange(status:string) {
    if (status == 'INVALID') {
      this.errors.username = 'Username is required and must be unique.';
    } else if (status == 'VALID') {
      this.errors.usernameValid = true;
    }
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
