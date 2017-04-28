
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './authorized.guard';

import { LoginComponent           } from './login/login.component'
import { RecoverPasswordComponent } from './recover-password/recover-password.component'
import { SignupComponent          } from './signup/signup.component'
import { SignupDoneComponent      } from './signup-done/signup-done.component'
import { ActivateComponent        } from './activate/activate.component'

const routes: Routes = [
    { path: 'signup'          , component: SignupComponent          },
    { path: 'signup-done'     , component: SignupDoneComponent      },
    { path: 'activate/:token' , component: ActivateComponent        },
    { path: 'login'           , component: LoginComponent           },
    { path: 'recover-password', component: RecoverPasswordComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [ AuthorizedGuard ]
})
export class AuthRoutes {

}