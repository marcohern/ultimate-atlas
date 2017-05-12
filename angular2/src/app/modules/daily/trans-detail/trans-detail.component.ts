import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { DatePipe } from '@angular/common'
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { DailyTrans } from '../../../models/daily-trans'
import { DailyCat } from '../../../models/daily-cat'
import { DailyService } from '../daily.service'

import { ErrorMessageService } from '../../inputs/error-message.service'
import { AuthService } from '../../auth/auth.service'
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
  transType = [
    { value:'CASH', text:'Cash' },
    { value:'DEBIT', text:'Debit' }
  ];

  constructor(
    private ds:DailyService,
    private datepipe: DatePipe,
    private route:ActivatedRoute,
    private router:Router,
    private ems:ErrorMessageService,
    private uav:UaValidators,
    private auth:AuthService)
  { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    let now = new Date();
    let today = this.datepipe.transform(now, "yyyy-MM-dd");
    let seconds = this.datepipe.transform(now, "HH:mm:ss");

    this.transForm = this.ems.build({
      date: {
        control: [today, [Validators.required, Validators.pattern("[0-9]{4}-[0-9]{2}-[0-9]{2}")]],
        messages: {required:'Required.'}
      },
      time: {
        control: [seconds, [Validators.required, Validators.pattern("[0-9]{2}:[0-9]{2}:[0-9]{2}")]],
        messages: {required:'Required.',pattern:'Must have valid time format (HH:mm:ss).'}
      },
      cat_id: {
        control: ['', Validators.required],
        messages: {required:'Required.'}
      },
      value: {
        control: ['', [Validators.required, Validators.pattern("[\-+]?[0-9]+")]],
        messages: {required:'Required.',pattern:'Must be numeric.'}
      },
      type: {
        control: ['CASH', Validators.required],
        messages: {required:'Required.'}
      }
    });
  }

  private saveTrans(value) {
    
    let trans:DailyTrans = {
      cat_id:value.cat_id,
      user_id: this.auth.getUser().id,
      event_date: value.date + ' ' + value.time,
      type: value.type,
      value: value.value,
      status:''
    };

    let id = null;
    
    this.ds.saveTransaction(trans, id).subscribe(data => {
      this.router.navigate(['/daily/trans']);
    });
  }
}
