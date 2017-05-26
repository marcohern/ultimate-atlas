import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DailyTrans } from '../../../models/daily-trans';
import { DailyCat } from '../../../models/daily-cat';
import { DailyService } from '../daily.service';

import { ErrorMessageService } from '../../inputs/error-message.service';
import { AuthService } from '../../auth/auth.service';
import { UaValidators } from '../../inputs/ua-validators';

@Component({
  moduleId: module.id,
  selector: 'ua-trans-detail',
  templateUrl: './trans-detail.component.html',
  styleUrls: ['./trans-detail.component.css']
})
export class TransDetailComponent implements OnInit {


  private transForm: FormGroup;
  private MINUTE: number = 1000 * 60;

  cats: DailyCat[] = [];
  transType = [
    { value: 'CASH', text: 'Cash' },
    { value: 'DEBIT', text: 'Debit' }
  ];
  accounts = [
    { value: 'POCKET', text:'My Pocket' },
    { value: 'STACH', text:'My Stash' },
    { value: 'DEBIT', text:'Main Debit Account' },
    { value: 'CREDIT', text:'Main Credit Card' },
    { value: '3RDPARTY', text:'3rd Party' }
  ];

  constructor(
    private ds: DailyService,
    private datepipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router,
    private ems: ErrorMessageService,
    private uav: UaValidators,
    private auth: AuthService)
  { }

  ngOnInit() {
    const now = new Date();
    const today = this.datepipe.transform(now, 'yyyy-MM-dd');
    //let seconds = this.datepipe.transform(now, "HH:mm:ss");

    this.transForm = this.ems.build({
      date: {
        control: [today, [Validators.required, Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')]],
        messages: {required: 'Required.'}
      },
      time: {
        control: ['', [Validators.required, Validators.pattern('[0-9]{2}:[0-9]{2}:[0-9]{2}')]],
        messages: {required: 'Required.', pattern: 'Must have valid time format (HH:mm:ss).'}
      },
      cat_id: {
        control: ['', Validators.required],
        messages: {required: 'Required.'}
      },
      value: {
        control: ['', [Validators.required, Validators.pattern('[\-+]?[0-9]+(\.[0-9]+)?')]],
        messages: {required: 'Required.', pattern: 'Must be numeric.'}
      },
      type: {
        control: ['CASH', Validators.required],
        messages: {required: 'Required.'}
      },
      from: {
        control: ['POCKET', Validators.required],
        messages: {required: 'Required.'}
      },
      to: {
        control: ['3RDPARTY', Validators.required],
        messages: {required: 'Required.'}
      }
    });
    const id = +this.route.snapshot.params['id'];
    if (id) {
      this.ds.getTransaction(id).subscribe(data => {
        this.transForm.setValue({
          date: data.event_date.substr(0, 10),
          time: data.event_date.substr(11),
          cat_id: data.cat_id,
          value: data.value,
          type: data.type,
          from: data.from,
          to: data.to
        });
      });
    }
  }

  private onChangeValue(value) {
    let amount = 0+value.value;
    if (amount != NaN) {
      if (amount > 0) {
        this.transForm.controls['from'].setValue('3RDPARTY');
        this.transForm.controls['to'  ].setValue('POCKET');
      } else {
        this.transForm.controls['from'].setValue('POCKET');
        this.transForm.controls['to'  ].setValue('3RDPARTY');
      }
    }
  }

  private saveTrans(value) {
    const id = +this.route.snapshot.params['id'];
    const trans: DailyTrans = {
      id: id,
      cat_id: value.cat_id,
      user_id: this.auth.getUser().id,
      event_date: value.date + ' ' + value.time,
      type: value.type,
      value: value.value,
      from: value.from,
      to: value.to,
      from_acc: null,
      to_acc: null,
      status: ''
    };

    this.ds.saveTransaction(trans).subscribe(data => {
      this.router.navigate(['/daily/trans']);
    });
  }
}
