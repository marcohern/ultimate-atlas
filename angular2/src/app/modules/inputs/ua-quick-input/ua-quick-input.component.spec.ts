import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UaQuickInput } from './ua-quick-input.component';

describe('UaQuickInput', () => {
  let component: UaQuickInput;
  let fixture: ComponentFixture<UaQuickInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UaQuickInput ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UaQuickInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
