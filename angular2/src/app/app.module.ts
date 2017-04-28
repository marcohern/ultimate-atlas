import { NgModule                        } from '@angular/core'
import { BrowserModule                   } from '@angular/platform-browser'
import { BrowserAnimationsModule         } from '@angular/platform-browser/animations'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpModule                      } from '@angular/http'
import { InputsModule                    } from './modules/inputs/inputs.module'
import { AuthModule                      } from './modules/auth/auth.module'
import { AppRoutes                       } from './app.routes'

import { AppComponent     } from './app.component'
import { LoadingComponent } from './loading/loading.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { MenuComponent    } from './menu/menu.component'
import { TestComponent    } from './test/test.component'

import { RequestService   } from './request.service'
import { ConfigService    } from './config.service'

import { AuthSignupModule } from './modules/signup/auth-signup.module'
import { UserModule       } from './modules/user/user.module'
import { DailyModule      } from './modules/daily/daily.module'


@NgModule({
  imports: [
    //Basic Modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    InputsModule,
    AuthModule,

    //Plugable Modules
    AuthSignupModule, //Allow users to sign up by them selves
    UserModule,       //User management
    DailyModule,      //Daily transactions module

    //App Routes
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
