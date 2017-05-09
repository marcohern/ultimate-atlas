import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '../inputs/inputs.module';
import { InviteRoutes } from './invite.routes';

import { InviteComponent } from './invite/invite.component';
import { InviteDoneComponent } from './invite-done/invite-done.component';
//import { InviteSetpwdComponent } from './invite-setpwd/invite-setpwd.component';

import { InviteService } from './invite.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    InviteRoutes
  ],
  declarations: [InviteComponent, InviteDoneComponent],
  providers: [InviteService]
})
export class InviteModule { }
