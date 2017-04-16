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

  public query(uri:string, q:string=''): Observable<any> {
    this.calling = true;
    let url = this.configService.mapUrl(uri) + '?q=' + encodeURI(q);
    return this.http
      .get(url, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  public getItem(uri:string, id:number): Observable<any> {
    this.calling = true;
    let url = this.configService.mapUrl(uri) + '/' + id;
    return this.http
      .get(url, { headers: this.buildHeaders() })
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
    this.calling = true;
    let url = this.configService.mapUrl(uri);
    return this.http
      .post(url, body, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  public update(uri:string, body:any, id:number): Observable<any> {
    this.calling = true;
    let url = this.configService.mapUrl(uri) + '/' + id;
    return this.http
      .put(url, body, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  public save(uri:string, body:any): Observable<any> {
    this.calling = true;
    if (body.id) {
      return this.update(uri, body, body.id);
    } else {
      return this.create(uri, body);
    }
  }

  public post(uri:string, body:any): Observable<any> {
    this.calling = true;
    console.log("RequestService.post calling", this.calling);
    let url = this.configService.mapUrl(uri);
    return this.http
      .post(url, body, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  private handleError(error: Response) {
    console.log("RequestService.handleError", error);
    this.calling = false;
    console.log("RequestService.handleError calling", this.calling);
    return Observable.throw(error.json().error || 'Server error');
  }

  private do(data) {
    console.log("RequestService.do", data);
    this.calling = false;
  }

  public isCalling():boolean { return this.calling; }
}
