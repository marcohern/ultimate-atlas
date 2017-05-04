import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators } from '@angular/forms'
import { ErrorMessageService } from '../../inputs/error-message.service'
import { UaValidators } from '../../inputs/ua-validators'

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  private setPwdForm:FormGroup;
  constructor(
    private ems:ErrorMessageService,
    private uav:UaValidators) { }

  ngOnInit() {
    this.setPwdForm = this.ems.build({
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

}
