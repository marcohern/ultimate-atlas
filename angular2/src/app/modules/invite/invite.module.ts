import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { InviteRoutes } from './invite.routes';

import { InviteComponent } from './invite/invite.component';
import { InviteDoneComponent } from './invite-done/invite-done.component';
import { InviteSetpwdComponent } from './invite-setpwd/invite-setpwd.component';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    InviteRoutes
  ],
  declarations: [InviteComponent, InviteDoneComponent, InviteSetpwdComponent]
})
export class InviteModule { }
