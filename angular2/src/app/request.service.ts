import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import { ConfigService, EthnicMethod } from './config.service'
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
    private cs:ConfigService
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

  private _get(url:string): Observable<any> {
    this.calling = true;
    return this.http
      .get(url, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  private _post(url:string, body:any): Observable<any> {
    this.calling = true;
    return this.http
      .post(url, body, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  private _put(url:string, body:any): Observable<any> {
    this.calling = true;
    return this.http
      .put(url, body, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  private _delete(url:string): Observable<any> {
    this.calling = true;
    return this.http
      .delete(url, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  public get(uri:string, id:number): Observable<any> {
    let url = this.cs.mapUrl(uri, EthnicMethod.Get, id, new Map<string, any>());
    return this._get(url);
  }

  public post(uri:string, body:any): Observable<any> {
    let url = this.cs.mapUrl(uri, EthnicMethod.Post, null, new Map<string, any>());
    if (this.cs.get().request.mock)
      return this._get(url);
    return this._post(url, body);
  }

  public query(uri:string, q:string=''): Observable<any> {
    let url = this.cs.mapUrl(uri, EthnicMethod.Query, null, new Map<string, any>([
      ['q', [q]]
    ]));
    return this._get(url);
  }

  public create(uri:string, body:any): Observable<any> {
    let url = this.cs.mapUrl(uri, EthnicMethod.Create, null, new Map<string, any>());
    if (this.cs.get().request.mock)
      return this._get(url);
    return this._post(url, body);
  }

  public update(uri:string, body:any, id:number): Observable<any> {
    let url = this.cs.mapUrl(uri, EthnicMethod.Update, id, new Map<string, any>());
    if (this.cs.get().request.mock)
      return this._get(url);
    return this._put(url, body);
  }

  public delete(uri:string, id:number): Observable<any> {
    let url = this.cs.mapUrl(uri, EthnicMethod.Delete, id, new Map<string, any>());
    if (this.cs.get().request.mock)
      return this._get(url);
    return this._delete(url);
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
