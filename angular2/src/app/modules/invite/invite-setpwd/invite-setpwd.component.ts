import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup, Validators } from '@angular/forms'

import { ErrorMessageService } from '../../inputs/error-message.service'

import { InviteService } from '../invite.service'

import { UaValidators } from '../../inputs/ua-validators'

@Component({
  moduleId: module.id,
  selector: 'app-invite-setpwd',
  templateUrl: './invite-setpwd.component.html',
  styleUrls: ['./invite-setpwd.component.css']
})
export class InviteSetpwdComponent implements OnInit {

  invitePwdForm:FormGroup;
  token:string;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private is:InviteService,
    private uav:UaValidators,
    private ems:ErrorMessageService) { }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];

    this.invitePwdForm = this.ems.build({
      password: {
        control: ['', Validators.required],
        messages: {required:'Password required.'}
      },
      confirm: {
        control: ['', Validators.required, this.uav.requiresConfirm('password')],
        messages: {required:'Confirm Password required.', requiresConfirm: 'Password mismatch.'}
      }
    });
  }

  setPassword(value) {

    console.log(value);
    /*
    this.is.setPassword(this.token, value.password)
      .subscribe(data => {
        this.router.navigate(['/login']);
      });
      */
  }

}
