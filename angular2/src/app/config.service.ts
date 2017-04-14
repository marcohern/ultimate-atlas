import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Http, Headers, Response } from '@angular/http'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

import {Config} from './config'
import {RequestService} from './request/request.service'

const CONFIG:Config = {
  name:"Ultimate Atlas",
  prefix:""
}

@Injectable()
export class ConfigService {

  constructor() {}

  get() { return CONFIG; }
  getName() { return CONFIG.name; }
  getPrefix() { return CONFIG.prefix; }
  mapUrl(url:string) { return CONFIG.prefix + url; } 
}
