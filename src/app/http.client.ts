import {Injectable} from '@angular/core';
import {Http, Headers,RequestOptions,RequestOptionsArgs} from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
@Injectable()
export class HttpClient {

  constructor(private http: Http,
              private authHttp:AuthHttp) {}

  createAuthorizationHeader(headers: Headers) {

       if (localStorage.getItem('currentUser')) {
          var currentUser = JSON.parse(localStorage.getItem('currentUser'));
          var token = currentUser.token;
          console.log( token);
         //headers.append('x-access-token', `${token}`); 
         headers.append('Authorization', `Bearer ${token}`);
       }
  }

  createContentTypeHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json'); 
  }

   setOptions(options?: RequestOptionsArgs):RequestOptionsArgs {
        if(!options) {
            options = {};
        }
        if(!options.headers) {
            options.headers = new Headers();
        }
         return options;
   };

    addSecurityHeader(options: RequestOptionsArgs):void {


       var currentUser = JSON.parse(localStorage.getItem('currentUser'));
          var token = currentUser.token;

            options.headers.set('authentication',token);

        
        
        }

    
  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
     this.createContentTypeHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
   // this.createAuthorizationHeader(headers);
     //this.createContentTypeHeader(headers);
      // console.log( headers);
   /*var currentUser = JSON.parse(localStorage.getItem('currentUser'));
          var token = currentUser.token;
         let headers = new Headers({ 'Authorization': 'Bearer ' + token });
        //let options = new RequestOptions({ headers: headers });*/
  //  var option = this.setOptions(null);
 //   this.addSecurityHeader(option);
    return this.authHttp.post(url, data);
  }

    login(url, data) {
    let headers = new Headers();
     this.createContentTypeHeader(headers);

    return this.http.post(url, data,{
      headers: headers
    });
  }
}