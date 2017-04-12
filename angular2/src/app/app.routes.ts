import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent }  from './welcome/welcome.component';
import { RecoverPasswordComponent } from './auth/recover-password/recover-password.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'recover-password', component: RecoverPasswordComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutes {

}