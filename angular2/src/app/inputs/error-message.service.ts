import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ErrorMessageService {

  constructor() { }
  
  public errors  = { }
  public message = { }
  public status  = { }

  public rig(g:FormGroup, messages) {
    this.errors = {};
    this.message = {};
    g.valueChanges.subscribe(data => this.displayMessages(g, data));

    for (let control_id in messages) {
      let control = g.get(control_id);
      control.statusChanges.subscribe(status => this.displayStatus(g, control_id, status));
      this.message[control_id] = '';
      this.status[control_id]  = '';
    }
    this.errors = messages;
  }

  public displayMessages(g:FormGroup,values) {
    for (let control_id in g.controls) {
      this.message[control_id] = '';
      let control = g.get(control_id);
      if (control.dirty || control.valid) {
        for (let key in control.errors) {
          if (this.errors[control_id] && this.errors[control_id][key])
            this.message[control_id] += this.errors[control_id][key] + ' ';
          else this.message[control_id] += "["+key+"]";
        }
      }
    }
  }

  public displayStatus(g:FormGroup, control_id, status) {
    this.status[control_id] = status;
  }

  public setValues(g:FormGroup, defaults) {
    for (let control_id in defaults) {
      let control = g.get(control_id);
      if (control) {
        var value = defaults[control_id];
        if (value) control.setValue(value);
      } 
    }
  }
}
