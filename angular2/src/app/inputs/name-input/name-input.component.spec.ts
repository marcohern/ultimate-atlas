import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInput } from './name-input.component';

describe('NameInput', () => {
  let component: NameInput;
  let fixture: ComponentFixture<NameInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameInput ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
