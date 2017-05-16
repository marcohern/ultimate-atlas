import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { User } from '../../models/user';
import { LoginResponse } from './models/login-response';
import { LogoutResponse } from './models/logout-response';
import { SetPasswordResponse } from './models/set-password-response';
import { Token } from './models/token';
import { SendResetPasswordEmailResponse } from './models/send-reset-password-email-response';
import {RequestService} from'../../request.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private userStg = 'com.marcohern.ultimate-atlas.auth.user';
  private tokenStg = 'com.marcohern.ultimate-atlas.auth.token';

  public authenticated = false;
  private user: User = null;
  private token: Token = null;

  constructor(
    private rs: RequestService) { }

  public clearToken() {
    this.rs.clearToken();
    this.authenticated = false;
    this.user = null;
    this.token = null;

    localStorage.removeItem(this.tokenStg);
    localStorage.removeItem(this.userStg);
  }

  private setToken(loginResponse: LoginResponse) {
    this.user = loginResponse.user;
    this.token = loginResponse.token;
    this.authenticated = true;
    this.rs.setToken(loginResponse.token.token);

    localStorage.setItem(this.tokenStg, JSON.stringify(loginResponse.token));
    localStorage.setItem(this.userStg, JSON.stringify(loginResponse.user));
  }

  private updateToken(token: Token) {
    this.token = token;
    this.authenticated = true;
    this.rs.setToken(this.token.token);
  }

  public start() {
    const userJson = localStorage.getItem(this.userStg);
    const tokenJson = localStorage.getItem(this.tokenStg);
    if (userJson && tokenJson) {
      this.user = <User> JSON.parse(userJson);
      const localToken: Token = <Token> JSON.parse(tokenJson);

      this.rs.post('/check_token', {token: localToken.token})
        .map((r: Response) => <Token>r.json().token)
        .subscribe(
          data => this.updateToken(data),
          error => this.clearToken()
        );
    } else {
      this.clearToken();
    }
  }

  public login(username: string, password: string): Observable<LoginResponse> {
    return this.rs.post('/login', {username: username, password: password })
      .map((r: Response) => <LoginResponse>r.json())
      .do(loginResponse => this.setToken(loginResponse) );
  }

  public sendResetPasswordEmail(email: string): Observable<SendResetPasswordEmailResponse> {
    return this.rs.post('/reset-password', {email: email})
      .map((r: Response) => <SendResetPasswordEmailResponse>r.json());
  }

  public logout() {
    return this.rs.post('/logout', {})
      .map((r: Response) => <LogoutResponse>r.json())
      .do(response => {
        this.clearToken();
      });
  }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  public getUser(): User {
    return this.user;
  }

  public setPassword(token, password) {
    return this.rs.post('/reset-password-set', {token: token, password: password})
      .map((r: Response) => <SetPasswordResponse>r.json());
  }
}
