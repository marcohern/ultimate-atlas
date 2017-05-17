import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { AuthModule } from '../auth/auth.module';
import { InputsModule } from '../inputs/inputs.module';
import { DailyRoutes } from './daily.routes';

import { TransListComponent } from './trans-list/trans-list.component';
import { TransDetailComponent } from './trans-detail/trans-detail.component';
import { CatListComponent } from './cat-list/cat-list.component';

import { DailyService } from './daily.service';
import { UaQuickCategorySelect } from './ua-quick-category-select/ua-quick-category-select.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    InputsModule,
    ChartsModule,
    DailyRoutes
  ],
  declarations: [TransListComponent, TransDetailComponent, UaQuickCategorySelect, CatListComponent, HistoryComponent],
  providers: [DailyService, DatePipe],
  exports: [UaQuickCategorySelect]
})
export class DailyModule { }
