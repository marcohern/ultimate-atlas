import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { SignupRequest } from './signup-request'

import { LoginUser } from './login-user'
import { LoginResponse } from './login-response'
import { LogoutResponse } from './logout-response'
import { SendResetPasswordEmailResponse } from './send-reset-password-email-response'
import { SignupResponse } from './signup-response'
import {RequestService} from'../request.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  private loginUrl = 'api/login.json';
  private logoutUrl = 'api/logout.json';
  private resetPasswordUrl = 'api/reset-password.json';
  private signupUrl = 'api/signup.json';

  constructor(private _http:Http,
    private rs:RequestService) { }

  public authenticated:boolean = false;
  private user:LoginUser = null;

  public login(username:string, password:string):Observable<LoginResponse> {
    return this.rs.post(this.loginUrl, {username:username, password:password })
      .map((r:Response) => <LoginResponse>r.json())
      .do(loginResponse => {
        this.user = loginResponse.user;
        this.authenticated = true;
        this.rs.setToken(loginResponse.token);
      });
  }

  public sendResetPasswordEmail(email:string):Observable<SendResetPasswordEmailResponse> {
    return this.rs.post(this.resetPasswordUrl, {})
      .map((r:Response) => <SendResetPasswordEmailResponse>r.json());
  }

  public signup(user:SignupRequest): Observable<SignupResponse> {
    return this.rs.post(this.signupUrl, {})
      .map((r:Response) => <SignupResponse>r.json());
  }

  public logout() {
    return this.rs.post(this.logoutUrl, {})
      .map((r:Response) => <LogoutResponse>r.json())
      .do(response => {
        this.rs.clearToken();
        this.authenticated = false;
        this.user = null;
      });
  }

  public isAuthenticated():boolean {
    return this.authenticated;
  }

  public getUser():LoginUser {
    return this.user;
  }
}
