import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ua-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() title:string;

  constructor() { }

  ngOnInit() {
    
  }

}
