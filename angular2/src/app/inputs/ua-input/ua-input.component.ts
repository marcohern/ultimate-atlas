import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UaInputBase } from '../ua-input-base';

@Component({
  selector: 'ua-input',
  templateUrl: './ua-input.component.html',
  styleUrls: ['./ua-input.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UaInput),
      multi: true
    }
  ]
})
export class UaInput extends UaInputBase {
  
}
