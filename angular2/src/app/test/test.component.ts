import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { IOption } from '../inputs/ua-select-base'
import { IQuick } from '../inputs/ua-quick-select-base'
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
  mylistOptions:IOption[];
  myquickOptions:IQuick[];

  ngOnInit() {
    this.testForm = this.fb.group({
      myinput: ['', [Validators.required], [this.delayedValidatior.bind(this)]],
      myemail: ['', [Validators.required, Validators.email], []],
      mylist: ['', [Validators.required], []],
      myquick: ['', [Validators.required], []],
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
      },
      myquick: {
        required: 'Required.',
      }
    });

    this.mylistOptions = [
      {value:1, text:'Bus/Metro'},
      {value:2, text:'Breakfast'},
      {value:3, text:'Lunch'},
      {value:4, text:'Dinner'},
      {value:5, text:'Snack'},
      {value:6, text:'Beer'},
      {value:7, text:'ATM'},
      {value:8, text:'Market Purchases'},
    ];

    this.myquickOptions = [
      {value:1, text:'', glyph:'road',color:'primary'},
      {value:2, text:'', glyph:'cutlery',color:'success'},
      {value:3, text:'', glyph:'cutlery',color:'warning'},
      {value:4, text:'', glyph:'cutlery',color:'danger'},
      {value:5, text:'', glyph:'ice-lolly',color:'primary'},
      {value:6, text:'', glyph:'glass',color:'danger'},
      {value:7, text:'', glyph:'credit-card',color:'primary'},
      {value:8, text:'', glyph:'shopping-cart',color:'success'},
    ];

    this.ems.setValues(this.testForm, {
      myinput: '',
      myemail: 'thisis@myemail.com',
      mylist: '',
      myquick: ''
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
