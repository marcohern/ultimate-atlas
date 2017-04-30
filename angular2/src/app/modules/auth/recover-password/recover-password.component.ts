import { Component, OnInit } from '@angular/core';

import { AuthService} from '../auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  email:string;
  sending: boolean = false;
  sent: boolean = false;

  constructor(private _auth:AuthService) { }

  isSending():boolean { return this.sending; }
  isSent():boolean  { return this.sent; }

  ngOnInit() {
  }

  sendResetPasswordEmail() {
    this.sending = true;
    this._auth.sendResetPasswordEmail(this.email).subscribe(
      () => this.sent = true
    );
  }

}
