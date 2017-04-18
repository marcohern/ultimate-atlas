import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms'
import { UsernameInputService } from './username-input.service'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/first'

var usernameInputIsUniqueTimeout:any;
function usernameInputIsUnique(usernameInput:UsernameInput, c:AbstractControl, timeout:number): Observable<{[key : string] : any}>
{
  usernameInput.searching=true;
  return new Observable(observer => {
    clearTimeout(usernameInputIsUniqueTimeout);
    usernameInputIsUniqueTimeout = setTimeout(() => {
      
      usernameInput.getUis().check(c.value)
        .subscribe(data => {
          
          usernameInput.searching=false;
          if (data.usernameExists) observer.next({usernameUnique:false});
          else observer.next(null);
        },
        error => {
          c.enable();
          usernameInput.searching=false;
        });
    }, timeout);
  });
}

@Component({
  selector: 'ua-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.css'],
})
export class UsernameInput implements OnInit {


  
  @Output()
  groupCreated = new EventEmitter();

  @Output()
  controlCreated = new EventEmitter();

  usernameInputGroup:FormGroup;
  usernameInputControl:FormControl;
  usernameClass:string[];
  errorMessage:string = '';

  success:boolean=false;
  error:boolean=false;
  searching:boolean=false;
  

  messages = {
    required: 'Usename is required',
    usernameUnique: 'Username must be unique'
  };
  
  constructor(private fb:FormBuilder, private uis:UsernameInputService) { }

  public ngOnInit() {
    
    this.usernameInputControl = this.fb.control('', Validators.required, this.usernameInputIsUnique.bind(this));
    this.controlCreated.emit(this.usernameInputControl);

    this.usernameInputGroup = this.fb.group({
      username: this.usernameInputControl
    });
    this.groupCreated.emit(this.usernameInputGroup);
    
    this.usernameInputGroup.statusChanges.subscribe(status => this.updateValidation(status));
    this.updateValidation("");
  }

  public getUis() { return this.uis; }

  private usernameInputIsUnique(c:AbstractControl): Observable<{[key : string] : any}> {
    return usernameInputIsUnique(this, c, 2000).first();
  }

  private updateValidation(status) {
    console.log("updateValidation",status);
    this.usernameClass = [];
    this.error = false;
    this.success = false;
    this.errorMessage = '';
    if (this.usernameInputControl.dirty && this.usernameInputControl.invalid) {
      this.error = true;
      console.log(this.usernameInputControl.errors);
      for (let key in this.usernameInputControl.errors) {
        this.errorMessage += this.messages[key] + ' ';
      }
      //this.errorMessage = this.messages.required;
      this.usernameClass.push('has-error');
    } else if (this.usernameInputControl.valid) {
      this.success = true;
      this.usernameClass.push('has-success');
    }
  }
}
