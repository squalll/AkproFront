import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { HttpClient } from '../http.client';
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

    
    
}