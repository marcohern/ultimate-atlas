import { Injectable } from '@angular/core'
import { Response } from '@angular/http'

import { RequestService } from '../../request.service'

import {InviteUser} from './invite-user'
import {InviteUserResponse} from './invite-user-response'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class InviteService {

  constructor(private rs:RequestService) { }

  public inviteUser(user:InviteUser):Observable<InviteUserResponse> {
    return this.rs.post('/invite', user)
      .map((r:Response) => <InviteUserResponse>r.json());
  }

  public getUser(id:number):Observable<InviteUser> {
    return this.rs.get('/invite/get_user', id)
      .map((r:Response) => <InviteUser>r.json().user);
  }

  public setPassword(token, password):Observable<InviteUser> {
    return this.rs.post('/invite/get_user', {token:token, password:password})
      .map((r:Response) => <InviteUser>r.json());
  }

}
