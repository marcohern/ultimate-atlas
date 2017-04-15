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

  private users:User[];
  private searchText:string = '';
  private errorMessage:string;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(
        users => this.users = users,
        error => this.errorMessage = <any>error
      );
  }

  deleteUser(index) {
    let user = this.users[index];
    this.userService.deleteUser(user.id).subscribe(
      () => this.users.splice(index, 1)
    );
  }

  searchUsers() {
    console.log("UserListComponent.searchUsers", this.searchText);
    this.userService.getUsers(this.searchText).subscribe(
        users => this.users = users,
        error => this.errorMessage = <any>error
    );
  }

}
