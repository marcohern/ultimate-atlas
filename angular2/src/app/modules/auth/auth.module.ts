import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { InputsModule } from '../inputs/inputs.module'
import { AuthRoutes } from './auth.routes'

import { LoginComponent           } from './login/login.component'

import { AuthService              } from './auth.service';


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputsModule,
        AuthRoutes
    ],
    declarations:[
        LoginComponent
    ],
    providers:[AuthService],
    exports:[
        LoginComponent
    ]
})
export class AuthModule {

}