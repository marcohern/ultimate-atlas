import { Injectable } from '@angular/core';
import { RequestService } from '../../request.service';
import { Observable } from 'rxjs/Observable'
import { Response } from '@angular/http'
import 'rxjs/add/operator/map'

export interface UsernameUnique {
  usernameExists:boolean;
  usernameUnique:boolean;
}

export interface UserEmailUnique {
  userEmailExists:boolean;
  userEmailUnique:boolean;
}

@Injectable()
export class ValidatorService {

  constructor(private rs:RequestService) { }

  public checkUsername(username:string):Observable<UsernameUnique> {
    return this.rs.post('/check_username',{username:username},false)
      .map((r:Response) => <UsernameUnique>r.json());
  }

  public checkUserEmail(email:string):Observable<UserEmailUnique> {
    return this.rs.post('/check_user_email',{email:email},false)
      .map((r:Response) => <UserEmailUnique>r.json());
  }
}
