import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppRoutes } from './app.routes'

import { AppComponent } from './app.component'
import { LoadingComponent } from './loading/loading.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { MenuComponent } from './menu/menu.component'
import { TestComponent } from './test/test.component'

import { RequestService } from './request.service'
import { ConfigService } from './config.service'

import { AuthModule } from './modules/auth/auth.module'
import { AuthSignupModule } from './modules/auth-signup/auth-signup.module'
import { InputsModule } from './modules/inputs/inputs.module'
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
    AuthModule,
    AuthSignupModule,
    UserModule,
    DailyModule,
    AppRoutes
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    LoadingComponent,
    TestComponent,
  ],
  providers: [
    RequestService,
    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
