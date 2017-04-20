import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInput } from './password-input.component';

describe('PasswordInput', () => {
  let component: PasswordInput;
  let fixture: ComponentFixture<PasswordInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordInput ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
