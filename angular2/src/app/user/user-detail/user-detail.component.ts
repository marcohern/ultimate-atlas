import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { UserService } from '../user.service';

@Component({
  selector: 'ua-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
        private _route:ActivatedRoute,
        private _userService:UserService,
        private _router:Router
  ) { }

  ngOnInit() {
  }

}
