import { NgModule                 } from '@angular/core'
import { RouterModule, Routes     } from '@angular/router'

import { WelcomeComponent         } from './welcome/welcome.component'
import { RecoverPasswordComponent } from './auth/recover-password/recover-password.component'
import { LoginComponent           } from './auth/login/login.component'
import { SignupComponent          } from './auth/signup/signup.component'
import { SignupDoneComponent      } from './auth/signup-done/signup-done.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'recover-password', component: RecoverPasswordComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signup-done', component: SignupDoneComponent  },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutes {

}