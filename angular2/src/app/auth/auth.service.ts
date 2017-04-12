import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { LoginUser } from './login-user';
import { LoginResponse } from './login-response';
import { SendResetPasswordEmailResponse } from './send-reset-password-email-response';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  private _loginUrl = 'api/login.json';
  private _resetPasswordUrl = 'api/reset-password.json';

  constructor(private _http:Http) { }

  public _authenticated:boolean = false;
  private _user:LoginUser = null;

  public login(username:string, password:string):Observable<LoginResponse> {
    console.log("AuthService.login", username, password);
    return this._http
      .get(this._loginUrl)
      .map((r:Response) => <LoginResponse>r.json())
      .do(data => console.log("LoginResponse",data))
      .do(data => this._user = data.user )
      .do(data => this._authenticated = true )
      .catch(this.handleError);
  }

  public sendResetPasswordEmail(email:string):Observable<SendResetPasswordEmailResponse> {
    console.log("AuthService.sendResetPasswordEmail", email);
    return this._http
      .get(this._resetPasswordUrl)
      .map((r:Response) => <SendResetPasswordEmailResponse>r.json())
      .do(data => console.log("SendResetPasswordEmailResponse",data))
      .catch(this.handleError);
  }

  public logout() {
    console.log("AuthService.logout");
    this._authenticated = false;
    this._user = null;
  }

  public authenticated():boolean {
    return this._authenticated;
  }

  public getUser():LoginUser {
    console.log("AuthService.getUser",this._user);
    return this._user;
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
