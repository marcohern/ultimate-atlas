import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { RequestService } from '../../request.service';

import { UserDeleteResponse } from './models/user-delete-response';
import { UserSaveResponse } from './models/user-save-response';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../../models/user';

@Injectable()
export class UserService {

  private url = '/users';

  constructor(
    private rs: RequestService
  ) { }

  public getUsers(query: string= ''): Observable<User[]> {
    return this.rs.query(this.url, query)
      .map((r: Response) => <User[]>r.json());
  }

  public getUser(id: number): Observable<User> {
    return this.rs.get(this.url, id)
      .map((r: Response) => <User>r.json().user);
  }

  public deleteUser(id: number): Observable<UserDeleteResponse> {
    console.log('UserService.deleteUser', id);
    return this.rs.delete(this.url, id)
      .map((r: Response) => <UserDeleteResponse>r.json());
  }

  public saveUser(user: User) {
    console.log('UserService.saveUser', user);
    return this.rs.save(this.url, user)
      .map((r: Response) => <UserSaveResponse>r.json());
  }
}
