import { Component, OnInit } from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import { SignupService } from  '../signup.service'

@Component({
  moduleId: module.id,
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  constructor(
    private ss:SignupService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    let token = this.route.snapshot.params['token'];
    this.ss.activate(token).subscribe(data => {
      this.router.navigate(['/login']);
    },
    error =>{
      this.router.navigate(['/welcome']);
    });
  }
}