import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

import {Config} from './config'

@Injectable()
export class ConfigService {

  private configUrl:string = 'ultimate-atlas.json';
  private config:Config;

  constructor(private http:Http) { }

  get():Observable<Config> {
    return this.http
      .get(this.configUrl)
      .map((r:Response) => <Config>r.json())
      .do(config => this.config = config)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
