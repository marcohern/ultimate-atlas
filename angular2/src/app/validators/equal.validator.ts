import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

export function areEqual(c: AbstractControl, mustBeEqualTo:string): { [key: string]: any } {
  //console.log("areEqual",c,mustBeEqualTo);
  let v = c.value;
  let e = c.root.get(mustBeEqualTo);
  //console.log("areEqual ev",e,v);
  if (e && v !== e.value) {
    return {
      mustBeEqualTo:false
    }
  }

  return null;
}

@Directive({
  selector: '[mustBeEqualTo][formControlName],[mustBeEqualTo][formControl],[mustBeEqualTo][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
  ]
})
export class EqualValidator implements Validator {

  constructor(@Attribute('mustBeEqualTo') public mustBeEqualTo:string) {
  }
  
  validate(c: AbstractControl): { [key: string]: any } {
    return areEqual(c, this.mustBeEqualTo);
  }

}
