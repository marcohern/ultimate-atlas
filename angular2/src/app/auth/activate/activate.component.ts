import { Component, OnInit } from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import { AuthService } from  '../auth.service'

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  constructor(
    private as:AuthService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    let token = this.route.snapshot.params['token'];
    this.as.activate(token).subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

}
