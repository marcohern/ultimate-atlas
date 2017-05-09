import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup, Validators } from '@angular/forms'

import { ErrorMessageService } from '../../inputs/error-message.service'
import { UaValidators } from '../../inputs/ua-validators'

import { ResetPasswordService } from '../reset-password.service'


@Component({
  moduleId: module.id,
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm:FormGroup;
  token:string;

   constructor(
    private router:Router,
    private route:ActivatedRoute,
    private rss:ResetPasswordService,
    private uav:UaValidators,
    private ems:ErrorMessageService) { }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];

    this.resetPasswordForm = this.ems.build({
      password: {
        control: ['', Validators.required ],
        messages: {required:'Password required.'}
      },
      confirmPassword: {
        control: ['', [Validators.required, this.uav.requiresConfirm('password')] ],
        messages: {required:'Confirm Password required.', requiresConfirm: 'Password mismatch.'}
      }
    });
  }

  setPassword(value) {

    console.log(value);
    this.rss.setPassword(this.token, value.password)
      .subscribe(data => {
        this.router.navigate(['/login']);
      });
  }
}
