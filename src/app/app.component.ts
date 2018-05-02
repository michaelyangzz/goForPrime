import { Component, OnInit } from '@angular/core';
import { BusyIndicatorService } from './services/busy-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private bs: BusyIndicatorService) { }

  ngOnInit() {
  }
}
