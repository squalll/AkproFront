import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BaseRequestOptions } from '@angular/http';

import { routing } from './config.routing';
import { NgaModule } from '../../theme/nga.module';

import { ConfigComponent } from './config.component';
import { CreationUser } from './components/creationuser';
import { CreationSeanceType } from './components/creationseancetype';
import { UserSeance } from './components/userseance';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import {  UserService } from '../../_services/index';
import {  SeanceTypeService } from '../../_services/index';

import {DataTableModule,SharedModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule
  ],
  declarations: [
    ConfigComponent,
    CreationUser,
    CreationSeanceType,
    UserSeance
  ],
  providers: [
    UserService,
    SeanceTypeService
  ]
})
export default class ConfigModule {}