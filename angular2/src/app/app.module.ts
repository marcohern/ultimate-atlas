import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { UserModule } from './modules/user/user.module'
import { AppRoutes } from './app.routes'

import { AppComponent } from './app.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { MenuComponent } from './menu/menu.component'


import { AuthService } from './auth/auth.service'
import { RequestService } from './request.service'
import { ConfigService } from './config.service'
import { UsernameInputService } from './inputs/username/username-input.service'
import { LoginComponent } from './auth/login/login.component'
import { RecoverPasswordComponent } from './auth/recover-password/recover-password.component'
import { SignupComponent } from './auth/signup/signup.component'
import { SignupDoneComponent } from './auth/signup-done/signup-done.component'
import { LoadingComponent } from './loading/loading.component'

import { EqualValidator } from './validators/equal.validator'
import { UsernameUniqueValidator } from './validators/username-unique.validator'
import { UsernameInput } from './inputs/username/username-input.component'
import { TestComponent } from './test/test.component'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    UserModule,
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

    EqualValidator,

    UsernameUniqueValidator,

    UsernameInput,
    TestComponent
  ],
  providers: [
    RequestService,
    AuthService,
    ConfigService,
    UsernameInputService,
    EqualValidator,
    UsernameUniqueValidator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
