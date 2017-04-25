import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ValidatorService } from '../inputs/validator.service'
import { ErrorMessageService } from '../inputs/error-message.service'

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
      myinput: ['', [Validators.required], []],
      myemail: ['', [Validators.required, Validators.email], []],
    });

    this.ems.rig(this.testForm, {
      myinput: {
        required: 'Required.'
      },
      myemail: {
        required: 'Required.',
        email: 'Must have valid format.'
      }
    });

    this.ems.setValues(this.testForm, {
      myinput: 'This is MyInput',
      myemail: 'thisis@myemail.com'
    });
  }

  submit(values) {
    console.log(values);
  }
}
