
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './authorized.guard';

import { LoginComponent } from './login/login.component'


const routes: Routes = [
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [ AuthorizedGuard ]
})
export class AuthRoutes {

}