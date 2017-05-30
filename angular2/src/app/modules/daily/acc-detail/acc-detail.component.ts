import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ErrorMessageService } from '../../inputs/error-message.service';
import { AuthService } from '../../auth/auth.service';
import { UaValidators } from '../../inputs/ua-validators';

@Component({
  selector: 'app-acc-detail',
  templateUrl: './acc-detail.component.html',
  styleUrls: ['./acc-detail.component.css']
})
export class AccDetailComponent implements OnInit {

  constructor(
    private ems: ErrorMessageService,
    private uav: UaValidators,
    private auth: AuthService
  ) { }

  private accForm:FormGroup;
  private moreFields:boolean = false;

  private opType = [
    {value:'POCKET', text:'My Pocket'},
    {value:'STASH', text:'My Stash'},
    {value:'DEBIT', text:'Main Debit Account'},
    {value:'CREDIT', text:'Main Credit Account'},
    {value:'ACCOUNT', text:'Custom Account'}
  ];

  ngOnInit() {
    this.accForm = this.ems.build({
      type: {
        control:['', Validators.required],
        messages: {required:'Required.'}
      },
      name: {
        control:['', Validators.required],
        messages: {required:'Required.'}
      },
      bank: {
        control:[''],
        messages: {}
      },
      number: {
        control:[''],
        messages: {}
      },
      acctype: {
        control:[''],
        messages: {}
      },
      value: {
        control:[''],
        messages: {}
      }
    });

    this.moreFields = false;
  }

  onChangeType(value) {
    switch (value.type) {
      case 'POCKET':
      case 'STASH':
        this.moreFields = false;
        break;
      default:
        this.moreFields = true;
        break;
    }
  }
}
