import { Component, OnInit } from '@angular/core'
import {RequestService} from '../request.service'

@Component({
  selector: 'ua-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private rs:RequestService) { }

  ngOnInit() {
  }

}
