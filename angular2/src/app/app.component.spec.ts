import { TestBed, async } from '@angular/core/testing'

import { APP_BASE_HREF } from '@angular/common'
import { Http, ConnectionBackend,RequestOptions } from '@angular/http'

import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutes } from './app.routes'

import { AppComponent } from './app.component'
import { LoadingComponent } from './loading/loading.component'
import { MenuComponent } from './menu/menu.component'
import { LoginComponent } from './auth/login/login.component'
import { RecoverPasswordComponent } from './auth/recover-password/recover-password.component'
import { SignupComponent } from './auth/signup/signup.component'
import { TestComponent } from './test/test.component'
import { SignupDoneComponent } from './auth/signup-done/signup-done.component'
import { WelcomeComponent } from './welcome/welcome.component'

import { UsernameInput } from './inputs/username/username-input.component'
import { UserEmailInput } from './inputs/user-email/user-email-input.component'

import { RequestService } from './request.service'
import { ConfigService } from './config.service'
import { AuthService } from './auth/auth.service'
import { ValidatorService } from './inputs/validator.service'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        AppRoutes,
        FormsModule,
        HttpModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        LoadingComponent,
        MenuComponent,
        LoginComponent,
        RecoverPasswordComponent,
        SignupComponent,
        TestComponent,
        SignupDoneComponent,
        WelcomeComponent,

        UsernameInput,
        UserEmailInput
      ],
      providers:[
        {provide: APP_BASE_HREF, useValue: '/' },
        RequestService, ConfigService, AuthService, ValidatorService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Ultimate Atlas'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Ultimate Atlas');
  }));
/*
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));*/
});
