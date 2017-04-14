import { Component, OnInit } from '@angular/core'
import {ConfigService} from './config.service'
import {Config} from './config'

import { MenuComponent } from './menu/menu.component'

@Component({
  selector: 'ultimate-atlas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ultimate Atlas';
  
  constructor(private configService:ConfigService) {
  }

  ngOnInit() {
    let config:Config = this.configService.get();
    console.log("AppComponent.ngOnInit",config);
  }
}
