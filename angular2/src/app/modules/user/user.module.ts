import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutes } from './user.routes';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutes
  ],
  declarations: [UserListComponent, UserDetailComponent],
  providers:[ UserService ]
})
export class UserModule { }
