import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DailyAccs } from '../../../models/daily-accs';
import { recordAnimation } from '../../../animations';

import { DailyService } from '../daily.service';
@Component({
  selector: 'app-accs-list',
  templateUrl: './accs-list.component.html',
  styleUrls: ['./accs-list.component.css'],
  animations: [ recordAnimation ]
})
export class AccsListComponent implements OnInit {
  
  private accs:DailyAccs[] = [];

  constructor(
    private ds:DailyService,
    private router:Router) { }

  ngOnInit() {
    this.ds.getAccounts(1).subscribe(data => {
      this.accs = data;
    });
  }

  deleteAcc(i) {
    let id = this.accs[i].id;
    this.ds.deleteAccount(id).subscribe(data => {
      this.accs[i].status = 'gone';
    });
  }

}
