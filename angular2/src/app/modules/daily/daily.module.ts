import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule,DatePipe } from '@angular/common'
import { DailyRoutes } from './daily.routes' 
import { DatepickerModule } from 'ngx-bootstrap/datepicker'
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { TransListComponent } from './trans-list/trans-list.component'
import { TransDetailComponent } from './trans-detail/trans-detail.component'

import { DailyService } from './daily.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    DailyRoutes
  ],
  declarations: [TransListComponent, TransDetailComponent],
  providers:[DailyService,DatePipe]
})
export class DailyModule { }
