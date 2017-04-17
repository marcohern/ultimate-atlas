import { 
  Component, OnInit,
  trigger, state, style, transition, animate
} from '@angular/core';

import { UserService } from '../user.service';

import { User } from '../user';

@Component({
  moduleId: module.id,
  selector: 'ua-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('record', [
      state('gone', style({
        opacity:0.0,
        height:0,
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0
      })),
      transition('* => gone', [
        animate('500ms ease-out')
      ])
    ])
  ]
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
      () => {
        //this.users.splice(index, 1);
        this.users[index].status = "gone";
      }
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
