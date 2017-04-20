import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms'
import { ValidatableInput } from '../validatable-input'

import { ValidatorService } from '../validator.service'

@Component({
  selector: 'ua-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.css'],
})
export class UsernameInput extends ValidatableInput implements OnInit {

  @Input("username-exists-msg")
  usernameExistsMsg:string = 'Allready in use.';
  
  constructor(private vs:ValidatorService) { super(); }

  public ngOnInit() {
    this.init(Validators.required);
    this.addMessage('usernameExists',this.usernameExistsMsg);
  }

  public validate(observer) {
    return this.vs.checkUsername(this.control.value)
        .subscribe(data => {
          this.validating=false;
          if (data.usernameExists) observer.next({usernameExists:true});
          else observer.next(null);
        }, error => {
          this.validating=false;
          observer.next({httpError:true});
        });
  }
}
