import { Component, OnInit } from '@angular/core';
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
    console.log("TestComponent.onUsernameGroupCreated",usernameFormGroup )
  }

  onUsernameControlCreated(usernameInputControl:FormControl) {
    console.log("TestComponent.onUsernameControlCreated",usernameInputControl )
  }

}
