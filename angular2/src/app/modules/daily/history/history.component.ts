import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { DailyService } from '../daily.service';

const DAY = 1000*60*60*24;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {


  constructor(
    private auth:AuthService,
    private ds:DailyService) { }

  private displayChart:boolean = false;

  public lineChartData:Array<any> = [
    //{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'},
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series D'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series E'},
    //{data: [18, 48, 77, 9, 100, 27, 40], label: 'Series F'}
  ];

  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(0,116,107,0.2)',
      borderColor: 'rgba(0,116,107,1)',
      pointBackgroundColor: 'rgba(0,116,107,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,116,107,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(96,92,168,0.2)',
      borderColor: 'rgba(96,92,168,1',
      pointBackgroundColor: 'rgba(96,92,168,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(96,92,168,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(0,114,188,0.2)',
      borderColor: 'rgba(0,114,188,1)',
      pointBackgroundColor: 'rgba(0,114,188,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,114,188,0.8)'
    }/*,
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }*/
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

   public randomize():void {
     
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log("chartClicked",e);
  }
 
  public chartHovered(e:any):void {
    console.log("chartHovered",e);
  }

  public loadDays(data) {
    this.lineChartLabels=[];
    this.lineChartData = [];

    this.lineChartData = [
      {label: 'Transport', data:[]},
      {label: 'Food', data:[]},
      {label: 'Purchases', data:[]},
      {label: 'Sortie', data:[]},
      {label: 'Other', data:[]}
    ];

    for (let i in data) {
        this.lineChartLabels[i] = data[i].day;
        this.lineChartData[0].data.push(data[i].transport);
        this.lineChartData[1].data.push(data[i].food);
        this.lineChartData[2].data.push(data[i].purchases);
        this.lineChartData[3].data.push(data[i].sortie);
        this.lineChartData[4].data.push(data[i].other);
      }
      this.displayChart=true;
  }

  public initLastWeek() {
    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let yesterday = new Date(today.valueOf() - 1*DAY);
    let weekAgo = new Date(yesterday.valueOf() - 7*DAY);
    let user_id = this.auth.getUser().id;
    console.log("initLastWeek",user_id, weekAgo, yesterday);
    
    this.displayChart = false;
    this.ds.getDaysChart(user_id,weekAgo, yesterday).subscribe( data => this.loadDays(data));
  }

  ngOnInit() {
    this.initLastWeek();
  }

}
