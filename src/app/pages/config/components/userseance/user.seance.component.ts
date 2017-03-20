import {Component,Output,EventEmitter,OnInit} from '@angular/core';
import {  SeanceTypeService } from '../../../../_services/index';

import {  SeanceType } from '../../../../models/seanceType';
import {  User } from '../../../../models/user';

@Component({
  selector: 'user-seance',
  template: require('./userSeance.html'),
})
export class UserSeance implements OnInit {


  seanceTypes: SeanceType[];

  constructor( private seanceTypeService: SeanceTypeService
              ) { }


  getSeanceType() {
     this.seanceTypeService.findAllWithUsers('ACT').subscribe(
                data => {
                  this.seanceTypes = data;
                },
                error => {
                   console.log(error);
                });
    }
 ngOnInit() {
       this.getSeanceType(); 

  }

  
}
