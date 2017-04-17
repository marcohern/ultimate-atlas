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
  active:boolean = false;

  constructor(
    private auth:AuthService,
    private router:Router,
    private fb:FormBuilder)
  {
  }

  public ngOnInit() {
    //console.log("SignupComponent.ngOnInit");
    this.signupForm = this.fb.group({
      username: ['', Validators.required, isUsenameUnique],
      password: ['', Validators.required],
      confirmPassword:  ['', [
        Validators.required,
        function (c) { return areEqual(c, "password")}
      ]],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      role:  ['', Validators.required]
    });

    this.signupForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
      this.active=true;
  }

  public onValueChanged(data) {
    //console.log("SignupComponent.onValueChanged",data);
  }

  private onUsernameChange() {
    console.log("SignupComponent.onUsernameChange");
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
