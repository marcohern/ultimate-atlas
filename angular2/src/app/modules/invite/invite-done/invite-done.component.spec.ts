import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteDoneComponent } from './invite-done.component';

describe('InviteDoneComponent', () => {
  let component: InviteDoneComponent;
  let fixture: ComponentFixture<InviteDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
