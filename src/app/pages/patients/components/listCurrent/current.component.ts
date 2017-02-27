import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {  PatientsService } from '../../../../_services/index';

import {  Patient } from '../../../../models/patient';

@Component({
  selector: 'current-patient',
  template: require('./current.html'),
})
export class CurrentPatient implements OnInit {

     patients: Patient[];

  @Input() cdEtatInput: string;

@Output() refreshParent= new EventEmitter();

  constructor( private patientsService: PatientsService) {
  }

  updatePatient(patient: Patient,cdEtat:string) {
     this.patientsService.updateCdEtat(patient,cdEtat).subscribe(
                data => {
                   this.getPatients();
                   this.refreshParent.emit(this.cdEtatInput);
                },
                error => {
                   console.log(error);
                });
    }

getPatients() {
     this.patientsService.findAll(this.cdEtatInput).subscribe(
                data => {
                  this.patients = data;
                },
                error => {
                   console.log(error);
                });
    }
 ngOnInit() {
       this.getPatients(); 
  }
}
