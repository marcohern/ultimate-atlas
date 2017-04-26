import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { ValidatorService } from '../inputs/validator.service'
import { ErrorMessageService } from '../inputs/error-message.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private vs:ValidatorService,
    private ems:ErrorMessageService) {}

  testForm:FormGroup;
  ngOnInit() {
    this.testForm = this.fb.group({
      myinput: ['', [Validators.required], [this.delayedValidatior.bind(this)]],
      myemail: ['', [Validators.required, Validators.email], []],
      mylist: ['', [Validators.required], []],
    });

    this.ems.rig(this.testForm, {
      myinput: {
        required: 'Required.'
      },
      myemail: {
        required: 'Required.',
        email: 'Must have valid format.'
      },
      mylist: {
        required: 'Required.'
      }
    });

    this.ems.setValues(this.testForm, {
      myinput: '',
      myemail: 'thisis@myemail.com',
      mylist: ''
    });
  }

  timeout:any;
  delayedValidatior(c:AbstractControl):Observable<{[key : string] : any}> {
    return new Observable(observer => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        observer.next(null);
      }, 3000);
    }).first();
  }

  submit(values) {
    console.log(values);
  }
}
