import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AuthModule } from '../auth/auth.module'
import { InputsModule } from '../inputs/inputs.module'
import { AuthSignupRoutes } from './auth-signup.routes'

import { SignupComponent          } from './signup/signup.component'
import { SignupDoneComponent      } from './signup-done/signup-done.component'
import { ActivateComponent        } from './activate/activate.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    InputsModule,
    AuthSignupRoutes
  ],
  declarations: [
    SignupComponent,
    SignupDoneComponent,
    ActivateComponent
  ],
  exports: [
    SignupComponent,
    SignupDoneComponent,
    ActivateComponent
  ]
})
export class AuthSignupModule { 

}
