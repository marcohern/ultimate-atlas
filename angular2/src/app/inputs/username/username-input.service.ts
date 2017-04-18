import { Injectable } from '@angular/core';
import { RequestService } from '../../request.service';
import { Observable } from 'rxjs/Observable'
import { Response } from '@angular/http'
import 'rxjs/add/operator/map'

export interface UsernameUnique {
  usernameExists:boolean;
}

@Injectable()
export class UsernameInputService {

  constructor(private rs:RequestService) { }

  public check(username:string):Observable<UsernameUnique> {
    return this.rs.post('/check_username',{},false)
      .map((r:Response) => <UsernameUnique>r.json());
  }
}
