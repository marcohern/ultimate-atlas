import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms'

@Component({
  selector: 'ua-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInput implements OnInit {

  @Input()
  label:string = 'Input Text';

  @Output()
  groupCreated:EventEmitter<FormGroup> = new EventEmitter;

  fieldClass:string[] = [];

  group:FormGroup;
  control:FormControl;

  private error:boolean = false;
  private success:boolean = false;
  private errorMessage:string;

  private errorMessages = {
    value: {
      required:'Required.',
      invalid:'Must be valid'
    }
  };

  constructor() { }

  ngOnInit() {
    console.log("NameInput.ngOnInit");
    this.control = new FormControl('',[Validators.required, this.isValidName.bind(this)]);
    this.group = new FormGroup({
      value: this.control
    });

    this.control.valueChanges.subscribe(data => this.onValueChange(data));
    //this.control.statusChanges.subscribe(status => this.onStatusChange(status));

    this.groupCreated.emit(this.group);
  }

  private isValidName(c:AbstractControl): { [key: string]: any }  {
    let name:string = c.value;
    if (name.match(/[0-9.]/)) return { invalid: true }
    return null;
  }

  private onValueChange(data) {
    this.error = false;
    this.success = false;
    this.fieldClass = [];
    this.errorMessage='';
    if (this.control && this.control.dirty && this.control.invalid) {
      this.error = true;
      const messages = this.errorMessages.value;
      for (const key in this.control.errors) {
        this.errorMessage += messages[key] + ' ';
      }
      this.fieldClass.push('has-error');
    } else if (this.control && this.control.valid) {
      this.success = true;
      this.fieldClass.push('has-success');
    }
  }

  private onStatusChange(status) {
    this.error = false;
    this.success = false;
    if (status=='INVALID') {
      this.error = true;

    }else if (status=='VALID') {
      this.success = true;
    }
  }
}
