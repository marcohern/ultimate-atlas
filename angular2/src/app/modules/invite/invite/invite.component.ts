import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';

import { ErrorMessageService } from '../../inputs/error-message.service';
import { UaValidators } from '../../inputs/ua-validators';

import { User } from '../../../models/user';

import {InviteService} from '../invite.service';


@Component({
  moduleId: module.id,
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {
  inviteForm: FormGroup;

  constructor(
    private router: Router,
    private ems: ErrorMessageService,
    private uav: UaValidators,
    private is: InviteService) { }

  ngOnInit() {
    this.inviteForm = this.ems.build({
      username: {
        control: ['', Validators.required, this.uav.usernameExists()],
        messages: {required: 'Required.', usernameExists: 'Must be unique.'}
      },
      email: {
        control: ['', [Validators.required, Validators.email], this.uav.userEmailExists()],
        messages: {required: 'Required.', email: 'Must have valid format.', userEmailExists: 'Must be unique.'}
      },
      fname: {
        control: ['', Validators.required],
        messages: {required: 'Required.'}
      },
      lname: {
        control: ['', Validators.required],
        messages: {required: 'Required.'}
      }
    });
  }

  inviteUser(value) {
    const user: User = value;

    this.is.inviteUser(user).subscribe(data => {
      this.router.navigate(['/invited']);
    });
  }

}
