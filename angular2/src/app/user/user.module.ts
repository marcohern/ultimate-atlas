import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutes } from './user.routes';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutes
  ],
  declarations: [UserListComponent, UserDetailComponent],
  providers:[ UserService ]
})
export class UserModule { }
