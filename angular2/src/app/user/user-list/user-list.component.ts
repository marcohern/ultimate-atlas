import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

import { User } from '../user';

@Component({
  moduleId: module.id,
  selector: 'ua-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[];
  errorMessage:string;

  constructor(private _userService:UserService) { }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(
        users => this.users = users,
        error => this.errorMessage = <any>error
      );
  }

  deleteUser(index) {
    let user = this.users[index];
    this._userService.deleteUser(user.id).subscribe(
      () => this.users.splice(index, 1)
    );
  }

}
