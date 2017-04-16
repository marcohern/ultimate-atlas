import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { SignupRequest } from './signup-request'

import { LoginUser } from './login-user'
import { LoginResponse } from './login-response'
import { LogoutResponse } from './logout-response'
import { Token } from './token'
import { SendResetPasswordEmailResponse } from './send-reset-password-email-response'
import { SignupResponse } from './signup-response'
import {RequestService} from'../request.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  private logoutUrl = 'tapi/logout.json';
  private resetPasswordUrl = 'tapi/reset-password.json';
  private signupUrl = 'tapi/signup.json';
  
  private userStg = 'com.marcohern.ultimate-atlas.auth.user';
  private tokenStg = 'com.marcohern.ultimate-atlas.auth.token';

  public authenticated:boolean = false;
  private user:LoginUser = null;
  private token:Token = null;

  constructor(private _http:Http,
    private rs:RequestService) { }

  public clearToken() {
    console.log("AuthService.clearToken");
    this.rs.clearToken();
    this.authenticated = false;
    this.user = null;
    this.token = null;

    localStorage.removeItem(this.tokenStg);
    localStorage.removeItem(this.userStg);
  }

  private setToken(loginResponse:LoginResponse) {
    console.log("AuthService.setToken", loginResponse);
    this.user = loginResponse.user;
    this.token = loginResponse.token;
    this.authenticated = true;
    this.rs.setToken(loginResponse.token.token);

    localStorage.setItem(this.tokenStg, JSON.stringify(loginResponse.token));
    localStorage.setItem(this.userStg, JSON.stringify(loginResponse.user));
  }

  private updateToken(token:Token) {
    console.log("AuthService.updateToken", token);
    this.token = token;
    this.authenticated = true;
    this.rs.setToken(this.token.token);

  }

  public start() {
    console.log("AuthService.start");
    let userJson = localStorage.getItem(this.userStg);
    let tokenJson = localStorage.getItem(this.tokenStg);
    if (userJson && tokenJson) {
      this.user = <LoginUser> JSON.parse(userJson);
      let localToken:Token = <Token> JSON.parse(tokenJson);

      this.rs.post('/check_token', {token:localToken.token})
        .map((r:Response) => <Token>r.json().token)
        .subscribe(
          remoteToken => this.updateToken(remoteToken),
          error => this.clearToken()
        );
    } else {
      this.clearToken();
    }
  }

  public login(username:string, password:string):Observable<LoginResponse> {
    console.log("AuthService.login",username, password);
    return this.rs.post('/login', {username:username, password:password })
      .map((r:Response) => <LoginResponse>r.json())
      .do(loginResponse => this.setToken(loginResponse) );
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
    return this.rs.post('/logout', {})
      .map((r:Response) => <LogoutResponse>r.json())
      .do(response => {
        this.clearToken();
      });
  }

  public isAuthenticated():boolean {
    return this.authenticated;
  }

  public getUser():LoginUser {
    return this.user;
  }
}
