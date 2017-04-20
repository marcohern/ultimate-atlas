import { Component, OnInit, Input } from '@angular/core'
import { Validators } from '@angular/forms'
import { ValidatableInput } from '../validatable-input'

import { ValidatorService } from '../validator.service'

@Component({
  selector: 'ua-user-email-input',
  templateUrl: './user-email-input.component.html',
  styleUrls: ['./user-email-input.component.css']
})
export class UserEmailInput extends ValidatableInput implements OnInit {

  @Input("email-exists-msg")
  emailExistsMsg:string = 'Allready in use.';

  @Input("email-format-msg")
  emailFormatMsg:string = 'Must be valid.';

  constructor(private vs:ValidatorService) {
    super();
  }

  public ngOnInit() {
    this.init([Validators.required, Validators.email]);
    this.addMessage('emailExists',this.emailExistsMsg);
    this.addMessage('email',this.emailFormatMsg);
  }

  public validate(observer) {
    return this.vs.checkUserEmail(this.control.value)
        .subscribe(data => {
          this.validating=false;
          if (data.userEmailExists) observer.next({emailExists:true});
          else observer.next(null);
        }, error => {
          this.validating=false;
          observer.next({httpError:true});
        });
  }
}
