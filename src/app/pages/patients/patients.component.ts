import {Component,ViewChild} from '@angular/core';
import {CurrentPatient} from './components/listCurrent/current.component';
import {CreationPatient} from './components/creation/creation.component';

@Component({
  selector: 'patients',
  template: require('./patients.html')
})
export class PatientsComponent {

    @ViewChild('currentActif') currentActif: CurrentPatient;

    @ViewChild('currentInactif') currentInactif: CurrentPatient;

    @ViewChild('creation') creation: CreationPatient;

  constructor() {}

   refresh(event) {
     if(event=='ACT'){
        this.currentInactif.getPatients();
     }else{
        this.currentActif.getPatients();
     }
   }
  refreshOnCreate(event) {
     
        this.currentActif.getPatients();
     
   }
   
}