import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'ua-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private version:string = '0.0.0.0';
  private loading:boolean;
  constructor(private rs:RequestService) { }

  ngOnInit() {
    this.loading=true;
    this.rs.getVersion().subscribe(
      data => {
        this.loading=false;
        this.version = data.number;
      }, error => {
        this.loading=false;
      }
    );
  }

}
