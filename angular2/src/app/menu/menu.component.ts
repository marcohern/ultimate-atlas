import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../modules/auth/auth.service';
import { ConfigService } from '../config.service';
import { menu } from '../menu';

@Component({
  selector: 'ua-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() title:string;
  menu:any;

  constructor(
    private auth:AuthService,
    private router:Router,
    private cs:ConfigService) {
      this.menu = menu;
    }

  ngOnInit() {
    
  }

  logout() {
    this.auth.logout().subscribe(
      data => {
        console.log("MenuComponent.logout R");
        this.router.navigate(['/welcome']);
      });
  }

}
