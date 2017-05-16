import { Component, OnInit, OnChanges, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UaSelectBase } from '../ua-select-base';

@Component({
  moduleId: module.id,
  selector: 'ua-select',
  templateUrl: './ua-select.component.html',
  styleUrls: ['./ua-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UaSelect),
      multi: true
    }
  ]
})
export class UaSelect extends UaSelectBase implements OnInit, OnChanges {

  constructor() { super(); }

  ngOnInit() { super.init(); }
  ngOnChanges(changes) { super.change(changes); }

}
