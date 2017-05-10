import { Component, OnInit } from '@angular/core';

import { ResetPasswordService } from '../reset-password.service'

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email:string;
  sending: boolean = false;
  sent: boolean = false;

  constructor(private rps:ResetPasswordService) { }

  isSending():boolean { return this.sending; }
  isSent():boolean  { return this.sent; }

  ngOnInit() {
  }

  request() {
    this.sending = true;
    this.rps.request(this.email).subscribe(
      () => this.sent = true
    );
  }

}
