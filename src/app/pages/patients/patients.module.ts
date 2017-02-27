import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BaseRequestOptions } from '@angular/http';
import { PatientsComponent } from './patients.component';

import { routing } from './patients.routing';
import { NgaModule } from '../../theme/nga.module';
import { CreationPatient } from './components/creation';
import { CurrentPatient } from './components/listCurrent';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  PatientsService } from '../../_services/index';

import {DataTableModule,SharedModule,ButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    FormsModule,
    DataTableModule,
    ButtonModule
  ],
  declarations: [
    PatientsComponent,
    CreationPatient,
    CurrentPatient
  ],
  providers: [
    PatientsService,
    BaseRequestOptions
  ]
})
export default class  PatientsModule {}