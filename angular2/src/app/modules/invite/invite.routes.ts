
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InviteComponent } from './invite/invite.component';
import { InviteDoneComponent } from './invite-done/invite-done.component';
import { InviteSetpwdComponent } from './invite-setpwd/invite-setpwd.component';

import { AuthorizedGuard } from '../auth/authorized.guard';

const routes: Routes = [
    { path: 'invite', component: InviteComponent },
    { path: 'invite/done',  component: InviteDoneComponent },
    { path: 'invite/set-password',  component: InviteSetpwdComponent },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [ AuthorizedGuard ]
})
export class InviteRoutes {

}