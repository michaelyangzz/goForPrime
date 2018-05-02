import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { BusyIndicatorComponent } from './busy-indicator/busy-indicator.component';
import { BusyIndicatorService } from './busy-indicator/busy-indicator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchBoxComponent, BusyIndicatorComponent],
  exports: [SearchBoxComponent, BusyIndicatorComponent],
  providers: [BusyIndicatorService]
})
export class UicontrolsModule { }


