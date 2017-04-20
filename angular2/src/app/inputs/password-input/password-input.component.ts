import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms'

@Component({
  selector: 'ua-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInput implements OnInit {

  @Input()
  label:string = 'Password';

  @Input("confirm-label")
  confirmLabel:string = 'Confirm Password';

  @Input("required-msg")
  requiredMsg:string = 'Required.';

  @Input("confirmed-required-msg")
  confirmedRequiredMsg:string = 'Required.';

  @Output()
  groupCreated:EventEmitter<FormGroup> = new EventEmitter();

  group:FormGroup;
  field:FormControl;
  confirmed:FormControl;
  
  errorMessages = {
    value: {
      required:'Required.',
      unconfirmed:'Must match below.'
    },
    confirmed:{
      required:'Required.',
      unconfirmed:'Must match password.'
    }
  };

  pristine = {
    value:true,
    confirmed:true
  };

  errors = {
    value: '',
    confirmed: ''
  };

  classes = {
    value:[],
    confirmed:[]
  }

  constructor() { }

  ngOnInit() {
    this.field = new FormControl('', [Validators.required]);
    this.confirmed = new FormControl('', [Validators.required, this.areEqual.bind(this)]);

    this.group = new FormGroup({});
    this.group.addControl('value', this.field);
    this.group.addControl('confirmed', this.confirmed);
    this.groupCreated.emit(this.group);

    this.field.valueChanges.subscribe(data => this.onValueChange(data));
    this.confirmed.valueChanges.subscribe(data => this.onConfirmedChange(data));
  }

  private onValueChange(data) {
    this.checkIfDisplayErrorMessage('value');
    this.confirmed.updateValueAndValidity();
  }

  private onConfirmedChange(data) {
    this.checkIfDisplayErrorMessage('confirmed');
  }
  private checkIfDisplayErrorMessage(field:string) {
    this.errors[field] = '';
    this.classes[field] = [];
    const control = this.group.get(field);
    if (control && control.dirty && !control.valid) {
      this.classes[field].push('has-error');
      const messages = this.errorMessages[field];
      for (const key in control.errors) {
        this.errors[field] += messages[key] + ' ';
      }
      this.pristine[field] = false;
    } else if (control && control.valid) {
      this.classes[field].push('has-success');
      this.pristine[field] = false;
    }
  }

  private areEqual(c:AbstractControl): { [key: string]: any } {
    if (!c) return null;
    if (!this.group) return null;
    if (!this.group.get('value')) return null;
    let field1 = c.value;
    let field2 = this.group.get('value').value;
    if (field1 == field2) {
      return null;
    } else {
      return {unconfirmed:true};
    }
  }

  private areEqualInverse(c:AbstractControl): { [key: string]: any } {
    if (!c) return null;
    if (!this.group) return null;
    if (!this.group.get('confirmed')) return null;
    let field1 = c.value;
    let field2 = this.group.get('confirmed').value;
    if (field1 == field2) {
      return null;
    } else {
      return {unconfirmed:true};
    }
  }
}
