import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BaseRequestOptions } from '@angular/http';

import { routing } from './calendar.routing';
import { NgaModule } from '../../theme/nga.module';

import { CalendarComponent } from './calendar.component';

import {ScheduleModule,DialogModule,InputTextModule,CalendarModule} from 'primeng/primeng';

import { FormsModule } from '@angular/forms';

import {  PatientsService } from '../../_services/index';
import {  SeanceTypeService } from '../../_services/index';
import {  SeanceService } from '../../_services/index';


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
    PatientsService,
    SeanceTypeService,
    SeanceService
  ]
})
export default class  MyCalendarModule {}