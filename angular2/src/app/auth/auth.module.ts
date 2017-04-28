import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { InputsModule } from '../modules/inputs/inputs.module'
import { AuthRoutes } from './auth.routes'

import { LoginComponent           } from './login/login.component'
import { RecoverPasswordComponent } from './recover-password/recover-password.component'
import { SignupComponent          } from './signup/signup.component'
import { SignupDoneComponent      } from './signup-done/signup-done.component'
import { ActivateComponent        } from './activate/activate.component'

import { AuthService              } from './auth.service'

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputsModule,
        AuthRoutes
    ],
    declarations:[
        SignupComponent,
        SignupDoneComponent,
        ActivateComponent,
        LoginComponent,
        RecoverPasswordComponent
    ],
    providers:[AuthService],
    exports:[
        SignupComponent,
        SignupDoneComponent,
        ActivateComponent,
        LoginComponent,
        RecoverPasswordComponent
    ]
})
export class AuthModule {

}