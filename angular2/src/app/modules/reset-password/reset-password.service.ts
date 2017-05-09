import { Injectable } from '@angular/core'
import { Request, Response } from '@angular/http'

import { RequestService } from '../../request.service'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { User } from '../../models/user'

@Injectable()
export class ResetPasswordService {

  constructor(private rs:RequestService) { }

  public setPassword(token, password):Observable<User> {
    return this.rs.post('/invite/set_password', {token:token, password:password})
      .map((r:Response) => <User>r.json());
  }
}
