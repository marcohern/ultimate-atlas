import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { RequestService } from '../../request.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Bar } from '../../models/bar';

@Injectable()
export class BarService {

  constructor(private rs:RequestService) { }

  list(city_id:number, q:string, modified:string, limit:number, offset:number): Observable<Bar[]> {
    return this.rs.filter('/bars',{city_id:city_id})
      .map((r:Response) => <Bar[]>r.json());
  }

  view(id:number) : Observable<Bar>{
    return this.rs.get('/bars',id)
      .map((r:Response) => <Bar>r.json());
  }

  create(bar:Bar) : Observable<Bar>{
    return this.rs.create('/bars',bar)
      .map((r:Response) => <Bar>r.json());
  }

  update(id:number, bar:Bar) : Observable<Bar> {
    return this.rs.update('/bars',bar,id)
      .map((r:Response) => <Bar>r.json());
  }

  delete(id:number) : Observable<Bar> {
    return this.rs.delete('/bars',id)
      .map((r:Response) => <Bar>r.json());
  }
}
