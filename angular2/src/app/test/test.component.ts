import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private testForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.testForm = this.fb.group({});
  }

  onUsernameGroupCreated(usernameFormGroup:FormGroup) {
    this.testForm.addControl('username', usernameFormGroup);
    //console.log("TestComponent.onUsernameGroupCreated",usernameFormGroup )
  }

  onUsernameControlCreated(usernameInputControl:FormControl) {
    //console.log("TestComponent.onUsernameControlCreated",usernameInputControl )
  }

  onUserEmailGroupCreated(userEmailInputGroup:FormControl) {
    this.testForm.addControl('email', userEmailInputGroup);
    //console.log("TestComponent.onUEmailGroupCreated",userEmailInputGroup )
  }
  onUserEmailControlCreated(userEmailInputControl:FormControl) {
    //console.log("TestComponent.onUserEmailControlCreated",userEmailInputControl )
  }

  submit(values) {
    console.log("TestComponent.submit",values);
  }

}
