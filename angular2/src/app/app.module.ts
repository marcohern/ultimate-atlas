import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppRoutes } from './app.routes'

import { AppComponent } from './app.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { MenuComponent } from './menu/menu.component'
import { LoginComponent } from './auth/login/login.component'
import { RecoverPasswordComponent } from './auth/recover-password/recover-password.component'
import { SignupComponent } from './auth/signup/signup.component'
import { SignupDoneComponent } from './auth/signup-done/signup-done.component'
import { LoadingComponent } from './loading/loading.component'

import { UsernameInput } from './inputs/username/username-input.component'
import { UserEmailInput } from './inputs/user-email/user-email-input.component'
import { TestComponent } from './test/test.component'

import { AuthService } from './auth/auth.service'
import { RequestService } from './request.service'
import { ConfigService } from './config.service'
import { ValidatorService } from './inputs/validator.service';
import { PasswordInput } from './inputs/password-input/password-input.component';
import { NameInput } from './inputs/name-input/name-input.component'

import { InputsModule } from './inputs/inputs.module'
import { UserModule } from './modules/user/user.module'
import { DailyModule } from './modules/daily/daily.module'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    InputsModule,
    UserModule,
    DailyModule,
    AppRoutes
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    LoginComponent,
    RecoverPasswordComponent,
    SignupComponent,
    SignupDoneComponent,
    LoadingComponent,

    TestComponent,
  ],
  providers: [
    RequestService,
    AuthService,
    ConfigService,
    ValidatorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
