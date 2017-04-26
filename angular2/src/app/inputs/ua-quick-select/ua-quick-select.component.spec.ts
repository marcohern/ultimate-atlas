import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UaQuickSelect } from './ua-quick-select.component';

describe('UaQuickSelect', () => {
  let component: UaQuickSelect;
  let fixture: ComponentFixture<UaQuickSelect>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UaQuickSelect ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UaQuickSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
