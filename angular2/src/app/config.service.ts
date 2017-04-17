import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Http, Headers, Response } from '@angular/http'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

import {RequestService} from './request.service'
import {environment} from '../environments/environment'

export enum EthnicMethod {
  None = 0,
  Get = 1,
  Post,
  Query,
  Create,
  Update,
  Delete
}

@Injectable()
export class ConfigService {

  constructor() {}

  get() { return environment; }
  getPrefix():string { return environment.request.prefix; }

  getPostfix(method:EthnicMethod):string {
    switch(method) {
      case EthnicMethod.Get: return this.get().request.postfix.get;
      case EthnicMethod.Post: return this.get().request.postfix.post;
      case EthnicMethod.Query: return this.get().request.postfix.query;
      case EthnicMethod.Create: return this.get().request.postfix.create;
      case EthnicMethod.Update: return this.get().request.postfix.update;
      case EthnicMethod.Delete: return this.get().request.postfix.delete;
      default: return '';
    }
  }

  mapUrl(uri:string, method:EthnicMethod=EthnicMethod.None, id?:number, query?:Map<string, any>) {
    let url = uri;
    let qr:string = '';
    if (!this.get().request.mock && id) url += '/' + id;
    if (query) {
      query.forEach((value:any, key:string) => {
        qr += (qr=='') ? '?' : '&';
        qr += key + '=' + encodeURI(value);
      });
    }
    return environment.request.prefix + url + this.getPostfix(method) + qr;
  } 
}
