
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from '../auth/authorized.guard';

import { BarDetailComponent } from './bar-detail/bar-detail.component';
import { BarListComponent   } from './bar-list/bar-list.component';

const routes: Routes = [
    { path: 'bars'   , component: BarListComponent  , canActivate: [AuthorizedGuard] },
    { path: 'bar/:id', component: BarDetailComponent, canActivate: [AuthorizedGuard] },
    { path: 'bar/add', component: BarDetailComponent, canActivate: [AuthorizedGuard] }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [ AuthorizedGuard ]
})
export class BarsRoutes {

}