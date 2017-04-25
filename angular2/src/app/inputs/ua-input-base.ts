import { Component, OnInit, Input,ViewChild, OnChanges, SimpleChange } from '@angular/core';
import { FormControl, ControlValueAccessor, Validator } from '@angular/forms';

export class UaInputBase implements OnInit, OnChanges, ControlValueAccessor {

  @Input()
  public label:string = 'UA Input';

  @Input()
  public status:string = '';

  @Input()
  public message:string = '';

  public error:boolean = false;
  public success:boolean = false;
  public touched:boolean = false;

  public fieldClass:string[];
  public messageClass:string[];

  public propagateChange:(_:any) => { }
  public propagateTouch: (_:any) => { }

  value:any;

  constructor() { }

  private updateStatus(status:string) {
    this.status = status;
    this.error = false;
    this.success = false;
    this.fieldClass = [];
    this.messageClass = [];
    switch (this.status) {
      case 'VALID':
        this.success = true;
        this.fieldClass.push('has-success');
        break;
      case 'PENDING':
        this.fieldClass.push('has-info');
        this.messageClass.push('alert-info');
        break;
      case 'INVALID':
        this.error = true;
        this.fieldClass.push('has-error');
        this.messageClass.push('alert-danger');
        break;
    }
  }
  
  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.status) {
      this.updateStatus(changes.status.currentValue);
    }
  }

  public writeValue       (value:any) { this.value           = value; }
  public registerOnChange (fn   :any) { this.propagateChange = fn; }
  public registerOnTouched(fn   :any) { this.propagateTouch  = fn; }
  
  protected onKeyUp($event) { 
    if (!this.touched) this.propagateTouch($event);
    this.propagateChange(this.value); 
  }
}