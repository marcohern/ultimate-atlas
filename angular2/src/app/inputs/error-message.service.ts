import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class ErrorMessageService {

  constructor() { }
  
  public errors  = { }
  public message = { }
  public status  = { }

  public build(controls) {
    let group = new FormGroup({});
    let all_messages = [];
    for(let control_id in controls) {
      let ctr = controls[control_id].control;
      all_messages[control_id] = controls[control_id].messages;
      let defval = null;
      let vals = null;
      let asyncvals = null;
      if(ctr.length > 0) defval = ctr[0];
      if(ctr.length > 1) vals = ctr[1];
      if(ctr.length > 2) asyncvals = ctr[2];

      group.addControl(control_id, new FormControl(defval,vals,asyncvals));
    }
    this.rig(group, all_messages);
    return group;
  }

  public rig(g:FormGroup, messages) {
    this.errors = {};
    this.message = {};

    for (let control_id in messages) {
      let control = g.get(control_id);
      control.statusChanges.subscribe(status => {
        this.displayStatus(g, control_id, status);
        this.displayMessages(g, control_id, status);
      });
      this.message[control_id] = '';
      this.status[control_id]  = '';
    }
    this.errors = messages;
  }

  public displayMessages(g:FormGroup, control_id, status) {
    this.message[control_id] = '';
    let control = g.get(control_id);
    if (status == 'PENDING') {
      this.message[control_id] += "Validating...";
    }
    if (status=='INVALID') {
      for (let key in control.errors) {
        if (this.errors[control_id] && this.errors[control_id][key])
          this.message[control_id] += this.errors[control_id][key] + ' ';
        else this.message[control_id] += "["+key+"]";
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
