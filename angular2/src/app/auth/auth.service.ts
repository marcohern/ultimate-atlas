import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { SignupRequest } from './signup-request'

import { LoginUser } from './login-user'
import { LoginResponse } from './login-response'
import { LogoutResponse } from './logout-response'
import { SendResetPasswordEmailResponse } from './send-reset-password-email-response'
import { SignupResponse } from './signup-response'
import { CheckTokenResponse } from './check-token-response'
import {RequestService} from'../request.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  private loginUrl = 'tapi/login.json';
  private logoutUrl = 'tapi/logout.json';
  private resetPasswordUrl = 'tapi/reset-password.json';
  private signupUrl = 'tapi/signup.json';
  
  private userStg = 'com.marcohern.ultimate-atlas.auth.user';
  private tokenStg = 'com.marcohern.ultimate-atlas.auth.user';

  constructor(private _http:Http,
    private rs:RequestService) { }

  public authenticated:boolean = false;
  private user:LoginUser = null;

  public start() {
    let userJson = localStorage.getItem(this.userStg);
    if (userJson) {
      let token = localStorage.getItem(this.tokenStg);
      this.authenticated = true;
      this.user = <LoginUser> JSON.parse(userJson);
      this.rs.setToken(userJson);

      this.rs.post('/api/check_token', {token:token})
        .map((r:Response) => <CheckTokenResponse>r.json())
        .subscribe(checkTokenResponse => {
          
        });
    }
  }

  public login(username:string, password:string):Observable<LoginResponse> {
    return this.rs.post(this.loginUrl, {username:username, password:password })
      .map((r:Response) => <LoginResponse>r.json())
      .do(loginResponse => {
        this.user = loginResponse.user;
        this.authenticated = true;
        this.rs.setToken(loginResponse.token);

        localStorage.setItem(this.tokenStg, loginResponse.token);
        localStorage.setItem(this.userStg, JSON.stringify(loginResponse.user));
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

        localStorage.removeItem(this.tokenStg);
        localStorage.removeItem(this.userStg);
      });
  }

  public isAuthenticated():boolean {
    return this.authenticated;
  }

  public getUser():LoginUser {
    return this.user;
  }
}
