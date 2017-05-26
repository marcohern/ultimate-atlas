import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccsListComponent } from './accs-list.component';

describe('AccsListComponent', () => {
  let component: AccsListComponent;
  let fixture: ComponentFixture<AccsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
