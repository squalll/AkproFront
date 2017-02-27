import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { HttpClient } from '../http.client';

import {  User } from '../models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {  }

    create(user: User) {

        return this.http.post('http://localhost:8080/api/user/create', JSON.stringify({ user: user }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
            })
          ;
    }


    
    
}