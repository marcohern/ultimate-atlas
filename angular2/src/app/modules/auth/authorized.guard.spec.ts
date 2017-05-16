import { TestBed, async, inject } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutes } from '../app.routes';

import { AuthService } from './auth.service';
import { RequestService } from '../request.service';
import { ConfigService } from '../config.service';

import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { SignupComponent } from './signup/signup.component';
import { SignupDoneComponent } from './signup-done/signup-done.component';
//import { LoadingComponent } from '../loading/loading.component'
import { WelcomeComponent } from '../welcome/welcome.component';
import { TestComponent } from '../test/test.component';

import { UsernameInput } from '../inputs/username/username-input.component';
import { UserEmailInput } from '../inputs/user-email/user-email-input.component';

import { AuthorizedGuard } from './authorized.guard';



describe('AuthorizedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, FormsModule, ReactiveFormsModule, AppRoutes],
      declarations: [
        LoginComponent, RecoverPasswordComponent, SignupComponent, SignupDoneComponent,
        WelcomeComponent, TestComponent,
        UsernameInput, UserEmailInput
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/' },
        AuthorizedGuard, AuthService, RequestService, ConfigService
      ]
    });
  });

  it('should ...', inject([AuthorizedGuard], (guard: AuthorizedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
