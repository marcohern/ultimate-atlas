import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UaQuickCategorySelect } from './ua-quick-category-select.component';

describe('UaQuickCategoryInput', () => {
  let component: UaQuickCategorySelect;
  let fixture: ComponentFixture<UaQuickCategorySelect>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UaQuickCategorySelect ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UaQuickCategorySelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
