import { Component, OnInit, OnChanges, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UaQuickSelectBase } from '../ua-quick-select-base';

@Component({
  moduleId: module.id,
  selector: 'ua-quick-select',
  templateUrl: './ua-quick-select.component.html',
  styleUrls: ['./ua-quick-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UaQuickSelect),
      multi: true
    }
  ]
})
export class UaQuickSelect extends UaQuickSelectBase implements OnInit, OnChanges {

  constructor() { super(); }

  ngOnInit() { super.init(); }

  ngOnChanges(changes) { super.change(changes); }

}
