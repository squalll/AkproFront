import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { HttpClient } from '../http.client';

import {  Seance } from '../models/seance';

@Injectable()
export class SeanceService {
    constructor(private http: HttpClient) {  }

    create(seance: Seance) {

      console.log(seance);

        return this.http.post('http://localhost:8080/api/seance/create', JSON.stringify({ seance: seance }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
            })
          ;
    }


         findAll(cdEtat: string) {

        return this.http.post('http://localhost:8080/api/seance/findAll',JSON.stringify({ cdEtat: cdEtat}))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                return response.json();
         
            })
          ;
    }


        findAllWithUsers() {

        return this.http.post('http://localhost:8080/api/seance/findAllWithUsers',JSON.stringify({ cdEtat: 'ACT'}))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                return response.json();
         
            })
          ;
    }


    
}