import {Component,Output,EventEmitter} from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {  PatientsService } from '../../../../_services/index';

import {  Patient } from '../../../../models/patient';

@Component({
  selector: 'creation-patient',
  template: require('./creation.html'),
})
export class CreationPatient {

  public patientToCreate:Patient = new Patient(null,null);
  
  @Output() refreshParent= new EventEmitter();

  constructor( private patientsService: PatientsService) {
  }

    public onSubmit():void {
 
      // your code goes here
       //console.log(values);
         this.patientsService.create(this.patientToCreate.prenom, this.patientToCreate.nom)   
         .subscribe(
                data => {
                  this.refreshParent.emit();
                },
                error => {
                   console.log(error);
                });
    
  }
}
