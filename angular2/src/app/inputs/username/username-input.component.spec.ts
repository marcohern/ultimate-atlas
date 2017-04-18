import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameInput } from './username-input.component';

describe('UsernameInputComponent', () => {
  let component: UsernameInput;
  let fixture: ComponentFixture<UsernameInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameInput ]
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
