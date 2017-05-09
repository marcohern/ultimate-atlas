import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InputsModule } from '../../modules/inputs/inputs.module'
import { ResetPasswordRoutes } from './reset-password.routes'

import { ResetPasswordComponent } from './reset-password/reset-password.component'

import { ResetPasswordService } from './reset-password.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    ResetPasswordRoutes
  ],
  declarations: [ResetPasswordComponent],
  providers: [ResetPasswordService]
})
export class ResetPasswordModule { }
