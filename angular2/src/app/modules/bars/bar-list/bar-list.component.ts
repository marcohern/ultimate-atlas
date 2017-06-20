import { Component, OnInit } from '@angular/core';
import { Bar } from '../../../models/bar';
import { BarService } from '../bar.service';
import { recordAnimation } from '../../../animations';

@Component({
  moduleId: module.id,
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.css'],
  animations: [ recordAnimation ]
})
export class BarListComponent implements OnInit {

  private searchText:string;
  private bars:Bar[];

  constructor(private bs:BarService) { }

  ngOnInit() {
    this.bs.list(1200729, '', '2000-01-01 00:00:00', 100,0).subscribe(
      data => {
        this.bars = data;
      }
    );
  }

  deleteBar(i) {

  }

}
