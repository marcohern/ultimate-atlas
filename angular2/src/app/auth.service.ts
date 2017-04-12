import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  private _authenticated:boolean = false;

  public login(username:string, password:string): void {
    this._authenticated = true;
  }

  public logout() {
    this._authenticated = false;
  }

  public authenticated() {
    return this._authenticated;
  }
}
