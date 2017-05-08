import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UaQuickTimeInput } from './ua-quick-time-input.component';

describe('UaQuickTimeInput', () => {
  let component: UaQuickTimeInput;
  let fixture: ComponentFixture<UaQuickTimeInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UaQuickTimeInput ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UaQuickTimeInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
