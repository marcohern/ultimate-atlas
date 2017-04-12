import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

import { User } from './user';

@Injectable()
export class UserService {

  private _userListUrl = 'api/users/user-list.json';
  
  constructor(private _http:Http) { }

  public getUsers(): Observable<User[]> {
    return this._http
      .get(this._userListUrl)
      .map((r:Response) => <User[]>r.json())
      .do(data => console.log("UserService.getUsers",data))
      .catch(this.handleError);
  }

  public getUser(id: number): Observable<User> {
    console.log("UserService.getUser " + id);
    return this._http
      .get(this._userListUrl)
      .map((r:Response) => <User[]>r.json()[id-1])
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
