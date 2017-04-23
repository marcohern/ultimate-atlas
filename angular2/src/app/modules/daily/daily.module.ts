import { NgModule } from '@angular/core'
import { CommonModule,DatePipe } from '@angular/common'
import { DailyRoutes } from './daily.routes' 

import { TransListComponent } from './trans-list/trans-list.component';
import { TransDetailComponent } from './trans-detail/trans-detail.component';

import { DailyService } from './daily.service'

@NgModule({
  imports: [
    CommonModule,
    DailyRoutes
  ],
  declarations: [TransListComponent, TransDetailComponent],
  providers:[DailyService,DatePipe]
})
export class DailyModule { }
