import { Injectable } from '@angular/core';

export const gbTopBusyMsg = '正在为您加载应用.';

@Injectable()
export class BusyIndicatorService {
  isBusy = false;
  busyMsg: string = gbTopBusyMsg;

  constructor() { }


  startWork(msg: string = null) {
    if (msg)
      this.busyMsg = msg;
    this.isBusy = true;
  }

  doneWork() {
    this.isBusy = false;
    this.busyMsg = gbTopBusyMsg;
  }
}
