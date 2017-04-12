import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';

import { UserModule } from './user/user.module';
import { CommModule } from './comm/comm.module';

import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { RecoverPasswordComponent } from './auth/recover-password/recover-password.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignupDoneComponent } from './auth/signup-done/signup-done.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    UserModule,
    CommModule,
    AppRoutes
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    LoginComponent,
    RecoverPasswordComponent,
    SignupComponent,
    SignupDoneComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
