import { NgModule                 } from '@angular/core';
import { RouterModule, Routes     } from '@angular/router';

import { WelcomeComponent         } from './welcome/welcome.component';
import { TestComponent            } from './test/test.component';

const routes: Routes = [
    { path: 'test'            , component: TestComponent            },
    { path: 'welcome'         , component: WelcomeComponent         },
    { path: ''  , redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutes {

}