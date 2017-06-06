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

  public lineChartData:Array<any> = [];

  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = { responsive: true };

  public color(r:number, g:number, b:number) {
    return {
      backgroundColor: 'rgba('+r+','+g+','+b+',0.2)',
      borderColor: 'rgba('+r+','+g+','+b+',1)',
      pointBackgroundColor: 'rgba('+r+','+g+','+b+',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba('+r+','+g+','+b+',0.8)'
    }
  }
  
  public lineChartColors:Array<any> = [
    this.color(148,159,177),
    this.color( 77, 83, 96),
    this.color(  0,116,107),
    this.color( 96, 92,168),
    this.color(  0,114,188)
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

    let end = new Date(today.valueOf() - 3*DAY);
    let start = new Date(end.valueOf() - 32*DAY);
    let user_id = this.auth.getUser().id;
    console.log("initLastWeek",user_id, start, end);
    
    this.displayChart = false;
    this.ds.getDaysChart(user_id, start, end).subscribe( data => this.loadDays(data));
  }

  ngOnInit() {
    this.initLastWeek();
  }

}
