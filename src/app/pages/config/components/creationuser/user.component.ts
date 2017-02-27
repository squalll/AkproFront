import {Component,Output,EventEmitter} from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {  UserService } from '../../../../_services/index';

import {  User } from '../../../../models/user';

@Component({
  selector: 'creation-user',
  template: require('./user.html'),
})
export class CreationUser {

  public userToCreate:User = new User();
  
  constructor( private userService: UserService) {
  }

    public onSubmit():void {
 
 
         this.userService.create(this.userToCreate)   
         .subscribe(
                data => {
                   console.log(data);
                },
                error => {
                   console.log(error);
                });
    
  }
}
