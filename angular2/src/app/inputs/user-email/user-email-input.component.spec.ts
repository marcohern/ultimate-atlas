import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { RequestService } from '../../request.service'
import { ConfigService } from '../../config.service'
import { ValidatorService } from '../validator.service'

import { UserEmailInput } from './user-email-input.component';

describe('UserEmailInput', () => {
  let component: UserEmailInput;
  let fixture: ComponentFixture<UserEmailInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, FormsModule, ReactiveFormsModule ],
      declarations: [ UserEmailInput ],
      providers:[RequestService,ConfigService,ValidatorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEmailInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
