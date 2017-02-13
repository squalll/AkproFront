import {Component, ViewEncapsulation,OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {  AuthenticationService } from '../../_services/index';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login implements OnInit  {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  private returnUrl: string;

  constructor(fb:FormBuilder,   
            private authenticationService: AuthenticationService,
             private router: Router,
            private route: ActivatedRoute) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public ngOnInit() {
        // reset login status
       // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
       console.log(values);
         this.authenticationService.login(values.email, values.password)
            .subscribe(
                data => {
                   console.log(data);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                   console.log(error);
                    this.submitted = false;
                });
    }
  }
}
