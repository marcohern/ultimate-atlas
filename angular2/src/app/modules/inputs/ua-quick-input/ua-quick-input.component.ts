import { Component, OnInit, OnChanges, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UaQuickInputBase } from '../ua-quick-input-base';

@Component({
  moduleId: module.id,
  selector: 'ua-quick-input',
  templateUrl: './ua-quick-input.component.html',
  styleUrls: ['./ua-quick-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UaQuickInput),
      multi: true
    }
  ]
})
export class UaQuickInput extends UaQuickInputBase implements OnInit, OnChanges {

  constructor() { super(); }

  ngOnInit() { super.init(); }

  ngOnChanges(changes) { super.change(changes); }

}
