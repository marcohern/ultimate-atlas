import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { InputsModule } from '../inputs/inputs.module'
import { AuthRoutes } from './auth.routes'

import { LoginComponent           } from './login/login.component'
import { RecoverPasswordComponent } from './recover-password/recover-password.component'

import { AuthService              } from './auth.service';
import { SetPasswordComponent } from './set-password/set-password.component'

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputsModule,
        AuthRoutes
    ],
    declarations:[
        LoginComponent,
        RecoverPasswordComponent,
        SetPasswordComponent
    ],
    providers:[AuthService],
    exports:[
        LoginComponent,
        RecoverPasswordComponent
    ]
})
export class AuthModule {

}