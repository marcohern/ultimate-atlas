import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms'

import { UserService } from '../user.service';
import { UaValidators } from '../../inputs/ua-validators'
import { ErrorMessageService } from '../../inputs/error-message.service';
import { User } from '../../../models/user';

@Component({
  moduleId: module.id,
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
  active:boolean = false;

  errorMessage:string;

  constructor(
        private route:ActivatedRoute,
        private userService:UserService,
        private router:Router,
        private ems:ErrorMessageService,
        private uav:UaValidators
  ) { }

  ngOnInit() {
    this.userForm = this.ems.build({
      username: {
        control:['', Validators.required],
        messages: {required:'Required.', usernameExists: 'Must be unique.' }
      },
      email: {
        control:['', Validators.required],
        messages: {required:'Required.', userEmailExists: 'Must be unique.' }
      },
      fname: {
        control:['', Validators.required  ],
        messages: {required:'Required.' }
      },
      lname: {
        control:['', Validators.required  ],
        messages: {required:'Required.' }
      }
    });

    let id = +this.route.snapshot.params['id'];
    if (id) {
      this.userService.getUser(id).subscribe(user => {
        this.user = user;
        this.userForm.setValue({
          username: user.username,
          email:user.email,
          fname:user.fname,
          lname:user.lname
        });

        this.userForm.get('username').setAsyncValidators(this.uav.usernameExists(user.username));
        this.userForm.get('email').setAsyncValidators(this.uav.userEmailExists(user.email));
        this.active = true;
      });
    } else {
      this.userForm.get('username').setAsyncValidators(this.uav.usernameExists());
      this.userForm.get('email').setAsyncValidators(this.uav.userEmailExists());
      this.active = true;
    }
  }

  saveUser(value) {
    console.log(value);
    let saveUser:User = {
      id: this.user.id,
      username: value.username,
      email: value.email,
      fname: value.fname,
      lname: value.lname,
      gender: this.user.gender,
      role: 'ADMIN',
      status:''
    }
    this.userService.saveUser(saveUser).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/users'])
      }
    );
  }

}
