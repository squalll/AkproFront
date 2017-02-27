import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BaseRequestOptions } from '@angular/http';

import { routing } from './config.routing';
import { NgaModule } from '../../theme/nga.module';

import { ConfigComponent } from './config.component';
import { CreationUser } from './components/creationuser';

import { FormsModule } from '@angular/forms';

import {  UserService } from '../../_services/index';


@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    FormsModule
  ],
  declarations: [
    ConfigComponent,
    CreationUser
  ],
  providers: [
    UserService
  ]
})
export default class ConfigModule {}