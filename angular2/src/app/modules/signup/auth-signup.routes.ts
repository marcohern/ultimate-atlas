
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SignupComponent          } from './signup/signup.component'
import { SignupDoneComponent      } from './signup-done/signup-done.component'
import { ActivateComponent        } from './activate/activate.component'

const routes: Routes = [
    { path: 'signup'          , component: SignupComponent          },
    { path: 'signup/done'     , component: SignupDoneComponent      },
    { path: 'signup/activate/:token' , component: ActivateComponent        },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: []
})
export class AuthSignupRoutes {

}