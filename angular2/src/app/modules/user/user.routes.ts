
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from '../auth/authorized.guard';

import { UserListComponent }  from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
    { path: 'users'   , component: UserListComponent  , canActivate: [AuthorizedGuard] },
    { path: 'user/:id', component: UserDetailComponent, canActivate: [AuthorizedGuard] },
    { path: 'user/add', component: UserDetailComponent, canActivate: [AuthorizedGuard] },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [ AuthorizedGuard ]
})
export class UserRoutes {

}