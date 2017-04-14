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

  constructor(
    private auth:AuthService,
    private router:Router) { }

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
