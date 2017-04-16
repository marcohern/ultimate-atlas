import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { UserModule } from './modules/user/user.module'
import { AppRoutes } from './app.routes'

import { AppComponent } from './app.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { MenuComponent } from './menu/menu.component'


import { AuthService } from './auth/auth.service'
import { RequestService } from './request.service'
import { ConfigService } from './config.service'
import { LoginComponent } from './auth/login/login.component'
import { RecoverPasswordComponent } from './auth/recover-password/recover-password.component'
import { SignupComponent } from './auth/signup/signup.component'
import { SignupDoneComponent } from './auth/signup-done/signup-done.component'
import { LoadingComponent } from './loading/loading.component'
import { EqualValidator } from './validators/equal.validator'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
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
    EqualValidator
  ],
  providers: [
    RequestService,
    AuthService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
