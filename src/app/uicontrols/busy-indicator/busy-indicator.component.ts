import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-busy-indicator',
  templateUrl: './busy-indicator.component.html',
  styleUrls: ['./busy-indicator.component.css']
})

export class BusyIndicatorComponent implements OnInit {

  @Input() isBusy = false;
  @Input() size: number = 5;
  @Input() busyMsg: string;

  constructor() { }

  ngOnInit() {
  }

}
