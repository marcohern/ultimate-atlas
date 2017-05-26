
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from '../auth/authorized.guard';

import { TransListComponent }  from './trans-list/trans-list.component';
import { TransDetailComponent } from './trans-detail/trans-detail.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { HistoryComponent } from './history/history.component';
import { AccsListComponent } from './accs-list/accs-list.component';

const routes: Routes = [
    { path: 'daily/trans'    , component: TransListComponent  , canActivate: [AuthorizedGuard] },
    { path: 'daily/trans/:id', component: TransDetailComponent, canActivate: [AuthorizedGuard] },
    { path: 'daily/trans/add', component: TransDetailComponent, canActivate: [AuthorizedGuard] },

    { path: 'daily/cats'     ,  component: CatListComponent   , canActivate: [AuthorizedGuard] },

    { path: 'daily/history'  , component: HistoryComponent    , canActivate: [AuthorizedGuard] },
    
    { path: 'daily/accs'     ,  component: AccsListComponent  , canActivate: [AuthorizedGuard] },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [ AuthorizedGuard ]
})
export class DailyRoutes {

}