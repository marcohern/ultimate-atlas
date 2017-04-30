import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { DatePipe } from '@angular/common'

import { DailyTrans } from '../daily-trans'
import { DailyCat } from '../daily-cat'
import { DailyService } from '../daily.service'

@Component({
  moduleId: module.id,
  selector: 'app-trans-detail',
  templateUrl: './trans-detail.component.html',
  styleUrls: ['./trans-detail.component.css']
})
export class TransDetailComponent implements OnInit {
  
  edate:string;
  etime:string;
  dateReadOnly:boolean = false;

  private MINUTE:number = 1000*60;

  trans:DailyTrans = {
    event_date: new Date(),
    cat_id: 0,
    user_id: 0,
    value:0.0,
    type:'CASH',
    category:'',
    status:''
  };

  cats:DailyCat[] = [];

  constructor(
    private ds:DailyService,
    private datepipe: DatePipe,
    private route:ActivatedRoute,
    private router:Router)
  { }

  private displayDate() {
    this.edate = this.datepipe.transform(this.trans.event_date, "yyyy-MM-dd");
    this.etime = this.datepipe.transform(this.trans.event_date, "HH:mm:ss");
  }

  onNow() {
    this.trans.event_date = new Date();
    this.displayDate();
  }

  onSub(minOffset:number=0) {
    this.trans.event_date = new Date(this.trans.event_date.valueOf() - minOffset*this.MINUTE);
    this.displayDate();
  }

  saveTrans() {
    console.log("TransDetailComponent.saveTrans",this.trans);

    let id = +this.route.snapshot.params['id'];

    this.ds.saveTransaction(this.trans, id).subscribe(data => {
      this.router.navigate(['/daily/trans']);
    });
  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];

    if (id) {
      this.dateReadOnly = true;
      this.ds.getTransaction(id).subscribe(data => {
        this.trans = data;
        this.displayDate();
      });
    } else {
      this.dateReadOnly = false;
      this.displayDate();
    }

    this.ds.getCategories().subscribe(data => {
      this.cats = data;
    });
  }

  onDateChange() {
    this.displayDate();
  }

  onTimeChange() {
    this.displayDate();
  }

}
