import { Component, OnInit } from '@angular/core';

import { DailyTrans } from '../../../models/daily-trans';
import { AuthService } from '../../auth/auth.service';

import { DatePipe } from '@angular/common';
import { DailyService } from '../daily.service';
import { recordAnimation } from '../../../animations';

@Component({
  moduleId: module.id,
  selector: 'ua-trans-list',
  templateUrl: './trans-list.component.html',
  styleUrls: ['./trans-list.component.css'],
  animations: [ recordAnimation ]
})
export class TransListComponent implements OnInit {

  trans: DailyTrans[];
  constructor(
    private ds: DailyService,
    public datepipe: DatePipe,
    private auth:AuthService) { }

  private DAY: number = 1000 * 60 * 60 * 24;

  ngOnInit() {
    let user_id = this.auth.getUser().id;
    this.ds.getTransactions(user_id).subscribe(data => {
      this.trans = data;
    });
  }

  deleteTrans(i) {
    const tran = this.trans[i];
    const time = tran.event_date.substr(11);
    if (confirm('Are you sure you want to delete ' +  time + ' ' + tran.category + '(' + tran.value + ')?')) {
        this.ds.deleteTransaction(tran.id).subscribe(data => {
        this.trans[i].status = 'gone';
      });
    }
  }

  onAnimDone($event, i) {
    if ($event.toState == 'gone') {
      console.log('TransListComponent.onAnimDone', $event, i);
      this.trans.splice(i, 1);
    }
  }

  group(i) {
    if (i == 0) return true;
    else if (this.trans[i].edate != this.trans[i - 1].edate) {
      return true;
    }
    return false;
  }

  datestr(date: string): string {
    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);

    const today = this.datepipe.transform(now, 'yyyy-MM-dd');
    if (today == date) return 'Today';

    const yesterday = this.datepipe.transform(now.valueOf() - this.DAY, 'yyyy-MM-dd');
    if (yesterday == date) return 'Yesterday';

    const dbef = this.datepipe.transform(now.valueOf() - 2 * this.DAY, 'yyyy-MM-dd');
    if (dbef == date) return 'Day Before Yesterday';

    return date;
  }

  allowEditDelete(date: string) {
    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);

    const today = this.datepipe.transform(now, 'yyyy-MM-dd');
    if (today == date) return true;

    const yesterday = this.datepipe.transform(now.valueOf() - this.DAY, 'yyyy-MM-dd');
    if (yesterday == date) return true;

    const dbef = this.datepipe.transform(now.valueOf() - 2 * this.DAY, 'yyyy-MM-dd');
    if (dbef == date) return true;

    else return false;
  }

  valueClass(value) {
    return (value > 0) ? 'trans_positive' : (value < 0) ? 'trans_negative' : '';
  }

  catClass(hypercat) {
    switch (hypercat) {
      case 'TRANSPORT':
        return 'trans_transport';
      case 'FOOD':
        return 'trans_food';
      case 'PURCHASES':
        return 'trans_purchases';
      case 'SORTIE':
        return 'trans_sortie';
      case 'OTHER':
        return 'trans_other';
      case 'NONE':
      default:
        return '';
    }
  }

}
