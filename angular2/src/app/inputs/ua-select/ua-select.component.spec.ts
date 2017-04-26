import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UaSelect } from './ua-select.component';

describe('UaSelect', () => {
  let component: UaSelect;
  let fixture: ComponentFixture<UaSelect>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UaSelect ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UaSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
