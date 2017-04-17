import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import { ConfigService } from './config.service'
import { Config } from './config'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

@Injectable()
export class RequestService {

  private token:string = null;
  private calling:boolean = false;

  constructor(
    private http:Http,
    private configService:ConfigService
  ) { 
    console.log("RequestService.constructor");
  }
  
  private buildHeaders():Headers {
    let headers:Headers = new Headers();
    headers.append('Accept','application/json');
    headers.append('Content-Type','application/json');
    if (this.token) headers.append('Token',this.token);
    return headers;
  }

  public setToken(token:string) { 
    this.token = token;
  }

  public clearToken() {
    this.token = null;
  }

  public get(uri:string): Observable<any> {
    this.calling = true;
    let url = this.configService.mapUrl(uri);
    return this.http
      .get(url, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  public post(uri:string, body:any): Observable<any> {
    this.calling = true;
    let url = this.configService.mapUrl(uri);
    return this.http
      .post(url, body, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  public put(uri:string, body:any): Observable<any> {
    this.calling = true;
    let url = this.configService.mapUrl(uri);
    return this.http
      .put(url, body, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  public delete(uri:string, id:number): Observable<any> {
    this.calling = true;
    let url = this.configService.mapUrl(uri) + '/' + id;
    return this.http
      .delete(url, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  public create(uri:string, body:any): Observable<any> {
    let url = this.configService.mapUrl(uri);
    return this.post(url, body);
  }

  public update(uri:string, body:any, id:number): Observable<any> {
    let url = this.configService.mapUrl(uri) + '/' + id;
    return this.put(url, body);
  }

  public query(uri:string, q:string=''): Observable<any> {
    let url = this.configService.mapUrl(uri);
    if (q) url += '?q=' + encodeURI(q);
    return this.get(url);
  }

  public getItem(uri:string, id:number): Observable<any> {
    let url = this.configService.mapUrl(uri) + '/' + id;
    return this.get(url);
  }

  public save(uri:string, body:any): Observable<any> {
    if (body.id) {
      return this.update(uri, body, body.id);
    } else {
      return this.create(uri, body);
    }
  }

  private handleError(error: Response) {
    this.calling = false;
    return Observable.throw(error.json().error || 'Server error');
  }

  private do(data) {
    this.calling = false;
  }

  public isCalling():boolean { return this.calling; }
}
