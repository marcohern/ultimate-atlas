import { Component, Input, Output } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';

export class UaInputBase implements ControlValueAccessor {

  @Input()
  public label = 'UA Input';

  @Input()
  public status = '';

  @Input()
  public message = '';

  @Input()
  public type = 'text';

  public error = false;
  public success = false;
  public pending = false;
  public touched = false;

  public fieldClass: string[];
  public messageClass: string[];

  public propagateChange: (_: any) => { };
  public propagateTouch: (_: any) => { };

  public value: any;

  constructor() { }

  private updateStatus(status: string) {
    this.status = status;
    this.error = false;
    this.success = false;
    this.pending = false;
    this.fieldClass = [];
    this.messageClass = [];
    switch (this.status) {
      case 'VALID':
        this.success = true;
        this.fieldClass.push('has-success');
        break;
      case 'PENDING':
        this.pending = true;
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

  init() {}

  change(changes) {
    if (changes.status) {
      this.updateStatus(changes.status.currentValue);
    }
  }

  public writeValue       (value: any) { this.value          = value; }
  public registerOnChange (fn   : any) {this.propagateChange = fn; }
  public registerOnTouched(fn   : any) { this.propagateTouch = fn; }

  protected onKeyUp($event) {
    this.propagateChange(this.value);
  }
}