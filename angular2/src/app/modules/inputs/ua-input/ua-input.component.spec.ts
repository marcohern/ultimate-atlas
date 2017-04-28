import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UaInput } from './ua-input.component';

describe('UaInput', () => {
  let component: UaInput;
  let fixture: ComponentFixture<UaInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UaInput ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UaInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
