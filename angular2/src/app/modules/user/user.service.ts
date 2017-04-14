import { Injectable } from '@angular/core'
import { Response } from '@angular/http'
import { RequestService } from '../../request.service'

import { UserDeleteResponse } from './user-delete-response'
import { UserSaveResponse } from './user-save-response'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { User } from './user'

@Injectable()
export class UserService {

  private userListUrl = 'api/users/user-list.json';
  private userDeleteUrl = 'api/users/user-delete.json';
  private userSaveUrl = 'api/users/user-add.json';
  
  constructor(
    private rs:RequestService
  ) { }

  public getUsers(): Observable<User[]> {
    console.log("UserService.getUsers");
    return this.rs.get(this.userListUrl)
      .map((r:Response) => <User[]>r.json());
  }

  public getUser(id: number): Observable<User> {
    console.log("UserService.getUser", id);
    return this.rs.getItem(this.userListUrl, id)
      .map((r:Response) => <User>r.json()[id-1]);
  }

  public deleteUser(id: number): Observable<UserDeleteResponse> {
    console.log("UserService.deleteUser",id);
    return this.rs.delete(this.userDeleteUrl, id)
      .map((r:Response) => <UserDeleteResponse>r.json());
  }

  public saveUser(user:User) {
    console.log("UserService.saveUser", user);
    return this.rs.save(this.userSaveUrl, user)
      .map((r:Response) => <UserSaveResponse>r.json());
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
