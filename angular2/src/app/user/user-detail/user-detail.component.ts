import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'ua-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user:User;
  errorMessage:string;

  constructor(
        private _route:ActivatedRoute,
        private _userService:UserService,
        private _router:Router
  ) { }

  ngOnInit() {
    let id = +this._route.snapshot.params['id'];
    this._userService.getUser(id)
      .subscribe(
        user => this.user = user,
        error => this.errorMessage = <any>error
      );
  }

}
