import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from '../auth.service'

@Component({
  moduleId: module.id,
  selector: 'ua-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  loginFailed:boolean = false;

  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit() {

  }

  login() {
    this.loginFailed = false;
    this._auth.login(this.username, this.password).subscribe(
      () => this._router.navigate(['/welcome']),
      error => this.loginFailed = true
    );
  }

}
