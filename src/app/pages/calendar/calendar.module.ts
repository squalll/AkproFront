import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BaseRequestOptions } from '@angular/http';

import { routing } from './calendar.routing';
import { NgaModule } from '../../theme/nga.module';

import { CalendarComponent } from './calendar.component';

import {ScheduleModule,DialogModule,InputTextModule,CalendarModule} from 'primeng/primeng';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    ScheduleModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    FormsModule
  ],
  declarations: [
    CalendarComponent
    
  ],
  providers: [
  ]
})
export default class  MyCalendarModule {}