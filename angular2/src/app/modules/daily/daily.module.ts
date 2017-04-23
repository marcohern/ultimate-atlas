import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransListComponent } from './trans-list/trans-list.component';
import { TransDetailComponent } from './trans-detail/trans-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TransListComponent, TransDetailComponent]
})
export class DailyModule { }
