import { Injectable } from '@angular/core'
import { Response } from '@angular/http'

import { RequestService } from '../../request.service'
import { SignupRequest } from './models/signup-request'
import { SignupResponse } from './models/signup-response'
import { ActivateResponse } from './models/activate-response'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class SignupService {

  constructor(private rs:RequestService) { }

  public signup(user:SignupRequest): Observable<SignupResponse> {
    return this.rs.post('/signup', user)
      .map((r:Response) => <SignupResponse>r.json());
  }
  
  public activate(token:string): Observable<ActivateResponse> {
    return this.rs.post('/activate',{token:token},false)
      .map((r:Response) => <ActivateResponse>r.json());
  }
}
