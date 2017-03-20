import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { HttpClient } from '../http.client';

import {  SeanceType } from '../models/seanceType';

@Injectable()
export class SeanceTypeService {
    constructor(private http: HttpClient) {  }

    create(seanceType: SeanceType) {

        return this.http.post('http://localhost:8080/api/seanceType/create', JSON.stringify({ seanceType: seanceType }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
            })
          ;
    }


         findAll(cdEtat: string) {

        return this.http.post('http://localhost:8080/api/seanceType/findAll',JSON.stringify({ cdEtat: cdEtat}))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                return response.json();
         
            })
          ;
    }


        findAllWithUsers(cdEtat: string) {

        return this.http.post('http://localhost:8080/api/seanceType/findAllWithUsers',JSON.stringify({ cdEtat: cdEtat}))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                return response.json();
         
            })
          ;
    }
    
}