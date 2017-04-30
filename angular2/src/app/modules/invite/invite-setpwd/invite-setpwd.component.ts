import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-invite-setpwd',
  templateUrl: './invite-setpwd.component.html',
  styleUrls: ['./invite-setpwd.component.css']
})
export class InviteSetpwdComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  setPassword() {
      this.router.navigate(['/login']);
  }

}
