import { Component, OnInit } from '@angular/core';
import { BusyIndicatorService } from '../services/busy-indicator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bs: BusyIndicatorService) { }

  ngOnInit() {
  }

  start() {
    this.bs.startWork();
  }

  done() {
    this.bs.doneWork();
  }

}
