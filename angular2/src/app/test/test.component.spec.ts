import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { UsernameInput } from '../inputs/username/username-input.component'
import { UserEmailInput } from '../inputs/user-email/user-email-input.component'

import { RequestService } from '../request.service'
import { ConfigService } from '../config.service'
import { ValidatorService } from '../inputs/validator.service'

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,HttpModule],
      declarations: [ TestComponent,
        UsernameInput, UserEmailInput
      ],
      providers:[ValidatorService,RequestService,ConfigService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
