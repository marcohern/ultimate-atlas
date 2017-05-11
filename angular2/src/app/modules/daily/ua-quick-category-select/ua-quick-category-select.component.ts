import { Component, OnInit, OnChanges, forwardRef } from '@angular/core'
import { NG_VALUE_ACCESSOR } from '@angular/forms'

import { UaQuickSelectBase } from '../../inputs/ua-quick-select-base'
import { IOption } from '../../inputs/ua-select-base'

import { DailyCat } from '../../../models/daily-cat'

import { DailyService } from '../daily.service'

@Component({
  selector: 'ua-quick-category-select',
  templateUrl: './ua-quick-category-select.component.html',
  styleUrls: ['./ua-quick-category-select.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UaQuickCategorySelect),
      multi: true
    }
  ]
})
export class UaQuickCategorySelect extends UaQuickSelectBase implements OnInit, OnChanges {

  constructor(private ds:DailyService) { super(); }

  ngOnInit() { 
    super.init();

    this.quicks = [
      {value:1, text:'', glyph:'road'          , color:'primary'},
      {value:4, text:'', glyph:'cutlery'       , color:'success'},
      {value:6, text:'', glyph:'cutlery'       , color:'warning'},
      {value:8, text:'', glyph:'cutlery'       , color:'danger'},
      {value:18, text:'', glyph:'ice-lolly'    , color:'primary'},
      {value:27, text:'', glyph:'glass'        , color:'danger'},
      {value:10, text:'', glyph:'shopping-cart', color:'success'},
      {value:24, text:'', glyph:'credit-card'  , color:'primary'},
    ];

    this.ds.getCategories().subscribe(data => {
      data.forEach((item:DailyCat)=>{
        this.options.push({text:item.name,value:item.id})
      });
    });
  }

  ngOnChanges(changes) { super.change(changes); }
}
