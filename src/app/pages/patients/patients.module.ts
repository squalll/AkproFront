import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BaseRequestOptions } from '@angular/http';
import { PatientsComponent } from './patients.component';
import { routing } from './patients.routing';
import { NgaModule } from '../../theme/nga.module';
import { CreationPatient } from './components/creation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  PatientsService } from '../../_services/index';



@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    FormsModule
  ],
  declarations: [
    PatientsComponent,
    CreationPatient
  ],
  providers: [
    PatientsService,
    BaseRequestOptions
  ]
})
export default class  PatientsModule {}