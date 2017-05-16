import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '../../modules/inputs/inputs.module';
import { ResetPasswordRoutes } from './reset-password.routes';

import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { ResetPasswordService } from './reset-password.service';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    ResetPasswordRoutes
  ],
  declarations: [ResetPasswordComponent, ForgotComponent],
  providers: [ResetPasswordService]
})
export class ResetPasswordModule { }
