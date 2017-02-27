import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { HttpClient } from '../http.client';

import {  Patient } from '../models/patient';

@Injectable()
export class PatientsService {
    constructor(private http: HttpClient) {  }

    create(prenom: string, nom: string) {

        return this.http.post('http://localhost:8080/api/patient/create', JSON.stringify({ prenom: prenom, nom: nom }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
            })
          ;
    }
    

       findAll(cdEtat: string) {

        return this.http.post('http://localhost:8080/api/patient/findAll',JSON.stringify({ cdEtat: cdEtat}))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                return response.json();
         
            })
          ;
    }

         updateCdEtat(patient : Patient,cdEtat:string ) {

        return this.http.post('http://localhost:8080/api/patient/updateCdEtat',JSON.stringify({ patient: patient,cdEtat :cdEtat}))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                return response.json();
         
            })
          ;
    }

    
    
}