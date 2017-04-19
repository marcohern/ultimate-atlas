import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { RequestService } from '../../request.service'
import { ConfigService } from '../../config.service'
import { ValidatorService } from '../validator.service'

import { UsernameInput } from './username-input.component';

describe('UsernameInputComponent', () => {
  let component: UsernameInput;
  let fixture: ComponentFixture<UsernameInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, FormsModule, ReactiveFormsModule ],
      declarations: [ UsernameInput ],
      providers:[RequestService,ConfigService,ValidatorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
