import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from '../auth.service'
import { ErrorMessageService } from '../../inputs/error-message.service'
import { UaValidators } from '../../inputs/ua-validators'

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  private setPwdForm:FormGroup;
  token:string;
  constructor(
    private ems:ErrorMessageService,
    private as:AuthService,
    private uav:UaValidators,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
    console.log("ngOnInit",this.token);
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

  setPassword(value) {
    console.log("SetPasswordComponent.setPassword",value);
    this.as.setPassword(this.token, value.password).subscribe(data => {
      console.log("as.setPassword",data);
      this.router.navigate(['/login']);
    });
  }
}
