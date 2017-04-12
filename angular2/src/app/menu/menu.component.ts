import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'ua-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() title:string;

  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit() {
    
  }

  logout() {
    this._auth.logout();
    this._router.navigate(['/welcome']);
  }

}
