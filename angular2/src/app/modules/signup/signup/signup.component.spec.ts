import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutes } from '../../app.routes';

import { RecoverPasswordComponent } from '../recover-password/recover-password.component';
import { LoginComponent } from '../login/login.component';
import { SignupDoneComponent } from '../signup-done/signup-done.component';
import { WelcomeComponent } from '../../welcome/welcome.component';
import { TestComponent } from '../../test/test.component';

import { UsernameInput } from '../../inputs/username/username-input.component';
import { UserEmailInput } from '../../inputs/user-email/user-email-input.component';

import { RequestService } from '../../request.service';
import { ConfigService } from '../../config.service';
import { AuthService } from '../../auth/auth.service';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, FormsModule, ReactiveFormsModule, AppRoutes ],
      declarations: [ SignupComponent,
        RecoverPasswordComponent, SignupDoneComponent,
        TestComponent, WelcomeComponent, LoginComponent,
        UsernameInput, UserEmailInput ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/' },
        RequestService, ConfigService, AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
