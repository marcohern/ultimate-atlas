
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from '../auth/authorized.guard';

import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotComponent } from './forgot/forgot.component';

const routes: Routes = [
    { path: 'reset-password/forgot', component: ForgotComponent },
    { path: 'reset-password/:token', component: ResetPasswordComponent },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [ AuthorizedGuard ]
})
export class ResetPasswordRoutes {

}