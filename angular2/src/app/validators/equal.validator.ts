import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[uav-equal][formControlName],[uav-equal][formControl],[uav-equal][ngModel]',
  //selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]'
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
  ]
})
export class EqualValidator implements Validator {

  constructor(@Attribute('uav-equal') public uavEqual:string) {

  }

  validate(c: AbstractControl): { [key: string]: any } {
    console.log("EqualValidatorDirective.validate",c);
    let v = c.value;
    let e = c.root.get(this.uavEqual);
    if (e && v !== e.value) {
      return {
        uavEqual:false
      }
    }

    return null
  }

}
