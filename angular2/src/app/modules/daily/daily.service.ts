import { Injectable } from '@angular/core'

import { Response } from '@angular/http'

import { DailyTrans } from './daily-trans'
import { DailyCat } from './daily-cat'
import { DailyTransDeleteResponse } from './daily-trans-delete-response'
import { DailyTransSaveResponse } from './daily-trans-save-response'

import { RequestService } from '../../request.service' 

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class DailyService {

  constructor(private rs:RequestService) { }

  getTransactions() : Observable<DailyTrans[]> {
    return this.rs.query('/daily_trans')
      .map((r:Response) => <DailyTrans[]>r.json());
  }

  getTransaction(id:number):Observable<DailyTrans> {
    return this.rs.get('/daily_trans', id)
      .map((r:Response) => <DailyTrans>r.json().daily_trans);
  }

  saveTransaction(trans:DailyTrans, id):Observable<DailyTransSaveResponse> {
    return this.rs.save('/daily_trans', trans, id)
      .map((r:Response) => <DailyTransSaveResponse>r.json());
  }

  deleteTransaction(id:number) : Observable<DailyTransDeleteResponse> {
    return this.rs.delete('/daily_trans',id)
      .map((r:Response) => <DailyTransDeleteResponse>r.json());
  }

  getCategories(): Observable<DailyCat[]> {
    return this.rs.query('/daily_cats')
      .map((r:Response) => <DailyCat[]>r.json())
  }
}
