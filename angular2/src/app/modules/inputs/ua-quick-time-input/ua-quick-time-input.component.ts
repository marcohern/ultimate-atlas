import { Component, OnInit, OnChanges, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms'
import { DatePipe } from '@angular/common'
import {UaQuickButton,UaQuickInputBase} from '../ua-quick-input-base'

@Component({
  selector: 'ua-quick-time-input',
  templateUrl: './ua-quick-time-input.component.html',
  styleUrls: ['./ua-quick-time-input.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UaQuickTimeInput),
      multi: true
    }
  ]
})
export class UaQuickTimeInput extends UaQuickInputBase implements OnInit, OnChanges {
  private static TIME_FORMAT:string = "HH:mm:ss";
  private static MIN:number = 1000*60;
  private time(value:Date):string { return this.dp.transform(value, UaQuickTimeInput.TIME_FORMAT); }
  private currentDate:Date;

  constructor(private dp:DatePipe) { super() }



  ngOnInit() {
    super.init(); 
    this.buttons =  [
      {label:'-5',value:-5,glyph:'remove',color:'warning'},
      //{label:'-2',value:-2,glyph:'remove',color:'warning'},
      {label:'-1',value:-1,glyph:'remove',color:'warning'},
      {label:'Now',value:0,glyph:'ok',color:'primary'},
      {label:'+1',value:1,glyph:'remove',color:'success'},
      //{label:'+2',value:2,glyph:'remove',color:'success'},
      {label:'+5',value:2,glyph:'remove',color:'success'}
    ];
  }

  ngOnChanges(changes) {
    super.change(changes);
  }

  onClickBtn(btn:UaQuickButton) {
    switch(btn.value) {
      case 0:
        this.currentDate = new Date();
        break;
      default:
        let n = this.currentDate.valueOf();
        if (isNaN(n)) n = (new Date()).valueOf();
        n += btn.value * UaQuickTimeInput.MIN;
        this.currentDate = new Date(n);
        break;
    }

    this.value = this.time(this.currentDate);
    this.propagateChange(this.value);
  }
  
  public writeValue(value:any) {
    super.writeValue(value);
  }

}
