import { Component, OnInit } from '@angular/core'
import {ConfigService} from './config.service'
import {AuthService} from './modules/auth/auth.service'

import { MenuComponent } from './menu/menu.component'


@Component({
  selector: 'ultimate-atlas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Ultimate Atlas';
  
  constructor(private configService:ConfigService, private auth:AuthService) {
  }

  ngOnInit() {
    let config = this.configService.get();
    this.auth.start();
  }
}
