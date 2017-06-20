import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BarListComponent } from './bar-list/bar-list.component';
import { BarDetailComponent } from './bar-detail/bar-detail.component';

import { BarsRoutes } from './bars.routes';

import { BarService } from './bar.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BarsRoutes
  ],
  declarations: [BarListComponent, BarDetailComponent],
  providers: [BarService]
})
export class BarsModule { }
