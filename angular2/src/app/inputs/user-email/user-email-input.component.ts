import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms'
import { ValidatorService } from '../validator.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/first'


var userEmailInputIsUniqueTimeout:any;
function userEmailInputIsUnique(userEmailInput:UserEmailInput, c:AbstractControl, timeout:number): Observable<{[key : string] : any}>
{
  userEmailInput.validating=true;
  return new Observable(observer => {
    console.log("userEmailInputIsUniqueTimeout start");
    clearTimeout(userEmailInputIsUniqueTimeout);
    userEmailInputIsUniqueTimeout = setTimeout(() => {
      
      console.log("userEmailInputIsUniqueTimeout call");
      userEmailInput.getValidator().checkUserEmail(c.value)
        .subscribe(data => {
          console.log("userEmailInputIsUniqueTimeout done");
          userEmailInput.validating=false;
          if (data.userEmailExists) observer.next({userEmailUnique:false});
          else observer.next(null);
        },
        error => {
          console.log("userEmailInputIsUniqueTimeout error");
          userEmailInput.validating=false;
          observer.next({usernameUniqueError:true});
        });
    }, timeout);
  });
}

@Component({
  selector: 'ua-user-email-input',
  templateUrl: './user-email-input.component.html',
  styleUrls: ['./user-email-input.component.css']
})
export class UserEmailInput implements OnInit {
  success:boolean=false;
  error:boolean=false;
  validating:boolean=false;
  errorMessage:string = '';

  @Output()
  groupCreated = new EventEmitter();

  @Output()
  controlCreated = new EventEmitter();

  userEmailInputGroup:FormGroup;
  userEmailInputControl:FormControl;
  userEmailClass:string[];

  messages = {
    required: 'Email is required.',
    email: 'Email must contain valid format',
    userEmailUnique: 'Email must be unique.',
    userEmailUniqueError: 'An error has ocurred.'
  };

  constructor(private fb:FormBuilder, private vs:ValidatorService) { }

  ngOnInit() {
    this.userEmailInputControl = this.fb.control(
      '',
      [Validators.required, Validators.email],
      [this.userEmailInputIsUnique.bind(this)]
    );
    this.controlCreated.emit(this.userEmailInputControl);

    this.userEmailInputGroup = this.fb.group({
      email: this.userEmailInputControl
    });
    this.groupCreated.emit(this.userEmailInputGroup);
    
    this.userEmailInputGroup.statusChanges.subscribe(status => this.updateValidation(status));
    this.updateValidation("");
  }

  private userEmailInputIsUnique(c:AbstractControl) {
    return userEmailInputIsUnique(this, c, 2000).first();
  }
  public getValidator():ValidatorService { return this.vs; }

  private updateValidation(status) {
    this.userEmailClass = [];
    this.error = false;
    this.success = false;
    this.errorMessage = '';
    if (this.userEmailInputControl.dirty && this.userEmailInputControl.invalid) {
      this.error = true;
      console.log(this.userEmailInputControl.errors);
      for (let key in this.userEmailInputControl.errors) {
        this.errorMessage += this.messages[key] + ' ';
      }
      this.userEmailClass.push('has-error');
    } else if (this.userEmailInputControl.valid) {
      this.success = true;
      this.userEmailClass.push('has-success');
    }
  }

}
