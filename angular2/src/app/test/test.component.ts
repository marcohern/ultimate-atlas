import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { IOption } from '../modules/inputs/ua-select-base'
import { IQuick } from '../modules/inputs/ua-quick-select-base'
import { ValidatorService } from '../modules/inputs/validator.service'
import { ErrorMessageService } from '../modules/inputs/error-message.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { UaValidators } from '../modules/inputs/ua-validators'
import { UaQuickButton } from '../modules/inputs/ua-quick-input-base'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private vs:ValidatorService,
    private ems:ErrorMessageService,
    private uav:UaValidators) {}

  testForm:FormGroup;
  mylistOptions:IOption[];
  myquickOptions:IQuick[];
  myQuickButtons:UaQuickButton[];

  ngOnInit() {
    this.testForm = this.ems.build({
      myinput:{ 
        control:['', [Validators.required]],
        messages: { required: 'Required.' }
      },
      myemail: {
        control:['', [Validators.required, Validators.minLength(4), Validators.email]],
        messages: { required: 'Required.', minlength:'Below minimum lenght (4).', email: 'Must have valid format.' },
      },
      mylist: {
        control:['', Validators.required],
        messages: { required: 'Required.' }
      },
      myquick: {
        control:['', Validators.required],
        messages: { required: 'Required.' }
      },
      password: {
        control:['', [Validators.required ]],
        messages: { required: 'Required.' }
      },
      confirmPassword: {
        control:['', [Validators.required, this.uav.requiresConfirm("password")] ],
        messages: { required: 'Required.', requiresConfirm:'Password mismatch.' }
      },
      myTime: {
        control:['', Validators.required],
        messages: { required: 'Required.' }
      }
    });
    
    this.testForm.get('myinput').setAsyncValidators([this.uav.usernameExists("except",2000)]);
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
      {value:1, text:'', glyph:'road'         , color:'primary'},
      {value:2, text:'', glyph:'cutlery'      , color:'success'},
      {value:3, text:'', glyph:'cutlery'      , color:'warning'},
      {value:4, text:'', glyph:'cutlery'      , color:'danger'},
      {value:5, text:'', glyph:'ice-lolly'    , color:'primary'},
      {value:6, text:'', glyph:'glass'        , color:'danger'},
      {value:7, text:'', glyph:'credit-card'  , color:'primary'},
      {value:8, text:'', glyph:'shopping-cart', color:'success'},
    ];

    this.myQuickButtons = [
      {label:'-5',value:-5,glyph:'remove',color:'warning'},
      {label:'-2',value:-2,glyph:'remove',color:'warning'},
      {label:'-1',value:-1,glyph:'remove',color:'warning'},
      {label:'Now',value:0,glyph:'ok',color:'primary'},
      {label:'+1',value:1,glyph:'remove',color:'success'},
      {label:'+2',value:2,glyph:'remove',color:'success'},
      {label:'+5',value:2,glyph:'remove',color:'success'}
    ];

    this.testForm.get('password').valueChanges.subscribe((c) => this.notifyConfirmPassword());

    this.ems.setValues(this.testForm, {
      myinput: '',
      myemail: 'thisis@myemail.com',
      mylist: '',
      myquick: ''
    });
  }

  notifyConfirmPassword() {
    this.testForm.get('confirmPassword').updateValueAndValidity();
  }  

  clickQuickButton(btn) {
    let now = new Date();
    if (btn.value==0) {

    }
  }

  submit(values) {
    console.log(values);
  }
}
