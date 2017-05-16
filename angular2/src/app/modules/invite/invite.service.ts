import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { RequestService } from '../../request.service';

import { User } from '../../models/user';
import {InviteUserResponse} from './models/invite-user-response';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class InviteService {

  constructor(private rs: RequestService) { }

  public inviteUser(user: User): Observable<InviteUserResponse> {
    return this.rs.post('/invite', user)
      .map((r: Response) => <InviteUserResponse>r.json());
  }

  public getUser(id: number): Observable<User> {
    return this.rs.get('/invite/get_user', id)
      .map((r: Response) => <User>r.json().user);
  }

}
