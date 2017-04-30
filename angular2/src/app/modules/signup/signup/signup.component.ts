import { Component, OnInit } from '@angular/core'

import { FormGroup, Validators } from '@angular/forms'

import { Router } from '@angular/router'

import { SignupRequest } from '../signup-request'

import { SignupService } from '../signup.service'
import { ErrorMessageService } from '../../inputs/error-message.service'
import { UaValidators } from '../../inputs/ua-validators'

@Component({
  moduleId: module.id,
  selector: 'ua-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  active:boolean = false;

  constructor(
    private ss:SignupService,
    private router:Router,
    private ems:ErrorMessageService,
    private uav:UaValidators)
  {
  }

  public ngOnInit() {
    console.log("SignupComponent.ngOnInit");

    this.signupForm = this.ems.build({
      username: {
        control:['',Validators.required,this.uav.usernameExists()],
        messages:{required:'Required.', usernameExists:'Must be unique.'} 
      },
      email: {
        control:['',[Validators.required,Validators.email],this.uav.userEmailExists()],
        messages:{required:'Required.', email:'Must have valid format.', userEmailExists:'Must be unique.'}
      },
      password: {
        control:['',Validators.required],
        messages:{required:'Required.'}
      },
      confirmPassword: {
        control:['',[Validators.required, this.uav.requiresConfirm("password")]],
        messages:{required:'Required.', requiresConfirm:'Password Mismatch.'}
      },
      fname: {
        control:['',Validators.required],
        messages:{required:'Required.'} 
      },
      lname: {
        control:['',Validators.required],
        messages:{required:'Required.'} 
      }
    });
    //this.ems.displayMessages(this.signupForm);
    //this.signupForm.updateValueAndValidity();

    this.active=true;
  }

  private signupUser(data:any) {

    var request:SignupRequest = <SignupRequest>data;
    request.role = 'ADMIN';
    request.gender = 'M';
    
    this.ss.signup(request).subscribe(
      data => this.router.navigate(['/signup/done'])
    );
  }

}
