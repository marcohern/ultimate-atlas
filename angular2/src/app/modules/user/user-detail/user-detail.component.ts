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

  user:User = {
    username: '',
    fname:'',
    lname:'',
    email:'',
    role:''
  };

  errorMessage:string;

  constructor(
        private route:ActivatedRoute,
        private userService:UserService,
        private router:Router
  ) { }

  ngOnInit() {

    let id = +this.route.snapshot.params['id'];
    if (id) {
      this.userService.getUser(id)
        .subscribe(
          user => this.user = user
        );
    }
  }

  saveUser() {
    this.userService.saveUser(this.user).subscribe(
      () => this.router.navigate(['/users'])
    );
  }

}
