import { Component, OnInit } from '@angular/core'

import { DailyTrans } from '../../../models/daily-trans'

import { DatePipe } from '@angular/common'
import { DailyService } from '../daily.service'
import { recordAnimation } from '../../../animations';

@Component({
  moduleId: module.id,
  selector: 'ua-trans-list',
  templateUrl: './trans-list.component.html',
  styleUrls: ['./trans-list.component.css'],
  animations: [ recordAnimation ]
})
export class TransListComponent implements OnInit {

  trans:DailyTrans[];
  constructor(private ds:DailyService,public datepipe: DatePipe) { }

  private DAY:number = 1000*60*60*24; 

  ngOnInit() {
    this.ds.getTransactions().subscribe(data => {
      this.trans = data;
    });
  }

  deleteTrans(i) {
    var tran = this.trans[i];
    let time = tran.event_date.substr(11);
    if (confirm("Are you sure you want to delete " +  time + " " + tran.category + "(" + tran.value + ")?")) {
        this.ds.deleteTransaction(tran.id).subscribe(data => {
        this.trans[i].status = 'gone';
      });
    }
  }

  onAnimDone($event, i) {
    if ($event.toState == 'gone') {
      console.log("TransListComponent.onAnimDone",$event,i);
      this.trans.splice(i,1);
    }
  }

  group(i) {
    if (i==0) return true;
    else if (this.trans[i].edate != this.trans[i-1].edate) {
      return true;
    }
    return false;
  }

  datestr(date:string):string {
    let now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);

    let today = this.datepipe.transform(now,"yyyy-MM-dd");
    if (today == date) return 'Today';

    let yesterday = this.datepipe.transform(now.valueOf() - this.DAY,"yyyy-MM-dd");
    if (yesterday == date) return 'Yesterday';

    let dbef = this.datepipe.transform(now.valueOf() - 2*this.DAY,"yyyy-MM-dd");
    if (dbef == date) return 'Day Before Yesterday';

    return date;
  }

  allowEditDelete(date:string) {
    let now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);

    let today = this.datepipe.transform(now,"yyyy-MM-dd");
    if (today == date) return true;

    let yesterday = this.datepipe.transform(now.valueOf() - this.DAY,"yyyy-MM-dd");
    if (yesterday == date) return true;

    else return false;
  }

  valueClass(value) {
    return (value > 0) ? 'trans_positive' : (value<0) ? 'trans_negative' : '';
  }

  catClass(hypercat) {
    switch(hypercat) {
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
