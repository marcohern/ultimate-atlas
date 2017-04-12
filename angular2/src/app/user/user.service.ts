import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { UserDeleteResponse } from './user-delete-response';
import { UserSaveResponse } from './user-save-response';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

import { User } from './user';

@Injectable()
export class UserService {

  private userListUrl = 'api/users/user-list.json';
  private userDeleteUrl = 'api/users/user-delete.json';
  private userSaveUrl = 'api/users/user-add.json';
  
  constructor(private http:Http) { }

  public getUsers(): Observable<User[]> {
    console.log("UserService.getUsers");
    return this.http
      .get(this.userListUrl)
      .map((r:Response) => <User[]>r.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  public getUser(id: number): Observable<User> {
    console.log("UserService.getUser", id);
    return this.http
      .get(this.userListUrl)
      .map((r:Response) => <User[]>r.json()[id-1])
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  public deleteUser(id: number): Observable<UserDeleteResponse> {
    console.log("UserService.deleteUser",id);
    return this.http
      .get(this.userDeleteUrl)
      .map((r:Response) => <UserDeleteResponse>r.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  public saveUser(user:User) {
    console.log("UserService.saveUser", user);
    return this.http
      .get(this.userSaveUrl)
      .map((r:Response) => <UserSaveResponse>r.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
