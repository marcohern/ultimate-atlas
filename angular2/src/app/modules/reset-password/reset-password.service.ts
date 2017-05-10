import { Injectable } from '@angular/core'
import { Request, Response } from '@angular/http'

import { RequestService } from '../../request.service'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { User } from '../../models/user'
import { RequestResetPasswordResponse } from './models/request-reset-password-response'
import { ResetPasswordResponse } from './models/reset-password-response'

@Injectable()
export class ResetPasswordService {

  constructor(private rs:RequestService) { }

  public request(email:string):Observable<RequestResetPasswordResponse> {
    return this.rs.post('/reset-password', {email:email})
      .map((r:Response) => <RequestResetPasswordResponse>r.json());
  }

  public resetPassword(token:string, password:string):Observable<ResetPasswordResponse> {
    return this.rs.post('/reset-password/update', {token:token, password:password})
      .map((r:Response) => <ResetPasswordResponse>r.json());
  }
}