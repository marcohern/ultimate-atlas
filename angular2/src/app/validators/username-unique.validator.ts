import { Directive, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_ASYNC_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/first'

var timeout:any;
export function isUsenameUnique(c:AbstractControl):
    Promise<{[key : string] : any}>
  {
    //console.log("isUsenameUnique");
    return new Promise(resolve => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          //console.log("isUsenameUnique R");
          resolve(null);
        }, 2000);
    });
  }

@Directive({
  selector: '[usernameUnique][formControlName],[usernameUnique][formControl],[usernameUnique][ngModel]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => UsernameUniqueValidator),
    multi: true
  }]
})
export class UsernameUniqueValidator implements Validator {

  constructor() { 
    //console.log("UsernameUniqueValidator.constructor");
  }

  validate(c:AbstractControl):
    Promise<{[key : string] : any}>
  {
    //console.log("UsernameUniqueValidator.validate");
    return isUsenameUnique(c);
  }

}
