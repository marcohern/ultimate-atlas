import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmailInput } from './user-email-input.component';

describe('UserEmailComponent', () => {
  let component: UserEmailInput;
  let fixture: ComponentFixture<UserEmailInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEmailInput ]
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
