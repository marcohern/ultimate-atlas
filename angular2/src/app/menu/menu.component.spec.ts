import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutes } from '../app.routes';

import { LoginComponent } from '../auth/login/login.component';
import { RecoverPasswordComponent } from '../auth/recover-password/recover-password.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { SignupDoneComponent } from '../auth/signup-done/signup-done.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { TestComponent } from '../test/test.component';

import { UsernameInput } from '../inputs/username/username-input.component';
import { UserEmailInput } from '../inputs/user-email/user-email-input.component';

import { RequestService } from '../request.service';
import { ConfigService } from '../config.service';
import { AuthService } from '../auth/auth.service';

import { By } from '@angular/platform-browser';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, FormsModule, ReactiveFormsModule, AppRoutes],
      declarations: [ MenuComponent,
        LoginComponent, RecoverPasswordComponent, SignupComponent, SignupDoneComponent,
        WelcomeComponent, TestComponent,
        UsernameInput, UserEmailInput ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/' },
        RequestService, ConfigService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have set title', () => {
    component.title = 'The Title';
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('a.navbar-brand > span'));
    const el = de.nativeElement;

    expect(el.textContent).toContain('The Title');
  });
});
