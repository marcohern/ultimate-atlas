import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms'

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'ua-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user:User = {
    id:null,
    username: '',
    lname: '',
    fname:'',
    email:'',
    role:'ADMIN',
    status:''
  };

  userForm:FormGroup;

  errorMessage:string;

  constructor(
        private route:ActivatedRoute,
        private userService:UserService,
        private router:Router,
        private fb:FormBuilder
  ) { }

  onUsername(username) { this.userForm.addControl('username',username); }
  onFname(fname) { this.userForm.addControl('fname',fname); }
  onLname(lname) { this.userForm.addControl('lname',lname); }
  onEmail(email) { this.userForm.addControl('email',email); }

  ngOnInit() {
    this.userForm = this.fb.group({
      role: this.fb.control('ADMIN')
    });

    let id = +this.route.snapshot.params['id'];
    if (id) {
      this.userService.getUser(id)
        .subscribe(
          user => { 
            console.log("UserDetailComponent.ngOnInit R",user);
            this.userForm.setValue({
              username: { value: user.username },
              fname: { value: user.fname },
              lname: { value: user.lname },
              email: { value: user.email },
              role: user.role
            });
          }
        );
    }
  }

  saveUser(value) {
    console.log(value);
    /*
    this.userService.saveUser(this.user).subscribe(
      () => {

        this.router.navigate(['/users'])
      }
    );*/
  }

}
