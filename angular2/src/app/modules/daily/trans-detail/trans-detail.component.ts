import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { DatePipe } from '@angular/common'
import { FormGroup, FormControl } from '@angular/forms'

import { DailyTrans } from '../daily-trans'
import { DailyCat } from '../daily-cat'
import { DailyService } from '../daily.service'

import { ErrorMessageService } from '../../inputs/error-message.service'
import { UaValidators } from '../../inputs/ua-validators'

@Component({
  moduleId: module.id,
  selector: 'app-trans-detail',
  templateUrl: './trans-detail.component.html',
  styleUrls: ['./trans-detail.component.css']
})
export class TransDetailComponent implements OnInit {
  

  private transForm:FormGroup;
  private MINUTE:number = 1000*60;
  
  cats:DailyCat[] = [];

  constructor(
    private ds:DailyService,
    private datepipe: DatePipe,
    private route:ActivatedRoute,
    private router:Router,
    private ems:ErrorMessageService,
    private uav:UaValidators)
  { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    let now = new Date();
    let today = this.datepipe.transform(now, "yyyy-MM-dd");
    let seconds = this.datepipe.transform(now, "HH:mm:ss");

    this.transForm = this.ems.build({
      date: {
        control: [today],
        messages: {}
      },
      time: {
        control: [seconds],
        messages: {}
      }
    });
  }

  private submitTrans(value) {
    console.log("submitTrans",value);
    //this.edate = this.datepipe.transform(this.trans.event_date, "yyyy-MM-dd");
    //this.etime = this.datepipe.transform(this.trans.event_date, "HH:mm:ss");
    //this.trans.event_date = new Date(this.trans.event_date.valueOf() - minOffset*this.MINUTE);
  }

}
