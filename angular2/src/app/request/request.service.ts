import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import { ConfigService } from '../config.service'
import { Config } from '../config'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

@Injectable()
export class RequestService {

  private token:string = null;

  constructor(
    private http:Http,
    private configService:ConfigService
  ) { }
  
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
    let url = this.configService.mapUrl(uri);
    return this.http
      .get(url, { headers: this.buildHeaders() })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  public getItem(uri:string, id:number): Observable<any> {
    let url = this.configService.mapUrl(uri);
    return this.http
      .get(url, { headers: this.buildHeaders() })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  public delete(uri:string, id:number): Observable<any> {
    let url = this.configService.mapUrl(uri);
    return this.http
      .get(url, { headers: this.buildHeaders() })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  public create(uri:string, body:any): Observable<any> {
    let url = this.configService.mapUrl(uri);
    return this.http
      .get(url, { headers: this.buildHeaders() })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  public update(uri:string, body:any, id:number): Observable<any> {
    let url = this.configService.mapUrl(uri);
    return this.http
      .get(url, { headers: this.buildHeaders() })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  public save(uri:string, body:any): Observable<any> {
    if (body.id) {
      return this.update(uri, body, body.id);
    } else {
      return this.create(uri, body);
    }
  }

  public post(uri:string, body:any): Observable<any> {
    let url = this.configService.mapUrl(uri);
    return this.http
      .get(url, { headers: this.buildHeaders() })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
