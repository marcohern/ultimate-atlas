import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'ua-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() title:string;

  constructor(private _auth:AuthService) { }

  ngOnInit() {
    
  }

  public login() {
    this._auth.login("autologin","12345");
  }

  public logout() {
    this._auth.logout();
  }

  public authenticated():boolean {
    return this._auth.authenticated();
  }

}
