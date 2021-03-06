import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { DatePipe } from '@angular/common';

import { DailyTrans } from '../../models/daily-trans';
import { DailyCat } from '../../models/daily-cat';
import { DailyDay } from '../../models/daily-day';
import { DailyAccs } from '../../models/daily-accs';
import { DailyTransDeleteResponse } from './models/daily-trans-delete-response';
import { DailyTransSaveResponse } from './models/daily-trans-save-response';

import { DailyCatDeleteResponse }  from './models/daily-cat-delete-response';
import { DailyCatSaveResponse } from './models/daily-cat-save-response';
import { DailyAccsDeleteResponse } from './models/daily-accs-delete-response';

import { RequestService } from '../../request.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DailyService {

  constructor(
    private rs: RequestService,
    private dp: DatePipe
  ) { }

  getTransactions(user_id:number) : Observable<DailyTrans[]> {
    return this.rs.filter('/daily_trans', {user_id:user_id})
      .map((r: Response) => <DailyTrans[]>r.json());
  }

  getTransaction(id: number): Observable<DailyTrans> {
    return this.rs.get('/daily_trans', id)
      .map((r: Response) => <DailyTrans>r.json().daily_trans);
  }

  saveTransaction(trans: DailyTrans): Observable<DailyTransSaveResponse> {
    return this.rs.save('/daily_trans', trans)
      .map((r: Response) => <DailyTransSaveResponse>r.json());
  }

  deleteTransaction(id: number) : Observable<DailyTransDeleteResponse> {
    return this.rs.delete('/daily_trans', id)
      .map((r: Response) => <DailyTransDeleteResponse>r.json());
  }

  getCategories(): Observable<DailyCat[]> {
    return this.rs.query('/daily_cats')
      .map((r: Response) => <DailyCat[]>r.json());
  }

  deleteCategory(id: number): Observable<DailyCatDeleteResponse> {
    return this.rs.delete('/daily_cats', id)
      .map((r: Response) => <DailyCatDeleteResponse>r.json());
  }

  saveCategory(cat: DailyCat) : Observable<DailyCatSaveResponse> {
    return this.rs.save('/daily_cats', cat)
      .map((r: Response) => <DailyCatSaveResponse>r.json());
  }

  getAccounts(user_id: number) : Observable<DailyAccs[]> {
    return this.rs.filter('/daily_accs', {user_id:user_id})
      .map((r:Response) => <DailyAccs[]>r.json());
  }

  deleteAccount(id:number) : Observable<DailyAccsDeleteResponse> {
    return this.rs.delete('/daily_accs', id)
      .map((r:Response) => <DailyAccsDeleteResponse>r.json());
  }

  getDaysChart(user_id:number, start:Date, end:Date) {
    let sstart = this.dp.transform(start, "yyyy-MM-dd");
    let send = this.dp.transform(end, "yyyy-MM-dd");
    return this.rs.post('/daily_charts/days', {user_id:user_id, start: sstart, end: send})
      .map((r: Response) => <DailyDay[]>r.json());
  }
}
