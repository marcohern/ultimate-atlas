import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteSetpwdComponent } from './invite-setpwd.component';

describe('InviteSetpwdComponent', () => {
  let component: InviteSetpwdComponent;
  let fixture: ComponentFixture<InviteSetpwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteSetpwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteSetpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
