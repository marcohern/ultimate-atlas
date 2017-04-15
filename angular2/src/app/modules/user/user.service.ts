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

  private usersUrl = 'api/users';
  private userDeleteUrl = 'tapi/users/user-delete.json';
  private userSaveUrl = 'tapi/users/user-add.json';
  
  constructor(
    private rs:RequestService
  ) { }

  public getUsers(): Observable<User[]> {
    return this.rs.get(this.usersUrl)
      .map((r:Response) => <User[]>r.json());
  }

  public getUser(id: number): Observable<User> {
    return this.rs.getItem(this.usersUrl, id)
      .map((r:Response) => <User>r.json().user);
  }

  public deleteUser(id: number): Observable<UserDeleteResponse> {
    console.log("UserService.deleteUser",id);
    return this.rs.delete(this.usersUrl, id)
      .map((r:Response) => <UserDeleteResponse>r.json());
  }

  public saveUser(user:User) {
    console.log("UserService.saveUser", user);
    return this.rs.save(this.usersUrl, user)
      .map((r:Response) => <UserSaveResponse>r.json());
  }
}
