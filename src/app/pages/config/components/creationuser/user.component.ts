import {Component,Output,EventEmitter} from '@angular/core';
import {FormGroup,FormBuilder,AbstractControl,Validators,} from '@angular/forms';
import {  UserService } from '../../../../_services/index';

import {  User } from '../../../../models/user';

@Component({
  selector: 'creation-user',
  template: require('./user.html'),
})
export class CreationUser {

  public userToCreate:User = new User();
  
  public form:FormGroup;
  public nom:AbstractControl;
  public prenom:AbstractControl;
  public adresse:AbstractControl;
  public cdPostal:AbstractControl;
  public ville:AbstractControl;      
  public mail:AbstractControl;  
  public tel:AbstractControl;
  public siret:AbstractControl;
  public login:AbstractControl;
  public password:AbstractControl;        
  public statut:AbstractControl;
  public admin:AbstractControl;

  constructor( fb:FormBuilder,
              private userService: UserService) {
 let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

        this.form = fb.group({
       'nom': ['', Validators.compose([Validators.required])],
       'prenom': ['', Validators.compose([Validators.required])],
      'adresse': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'cdPostal': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
       'ville': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'mail': ['', Validators.compose([Validators.required, Validators.minLength(4),Validators.pattern(emailRegex) ])],
      'tel': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
       'siret': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'login': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
       'statut': ['', Validators.compose([Validators.required])],
      'admin': ['', Validators.compose([Validators.required])]
    });

    this.nom = this.form.controls['nom'];
    this.prenom = this.form.controls['prenom'];
    this.adresse = this.form.controls['adresse'];
    this.cdPostal = this.form.controls['cdPostal'];
    this.ville = this.form.controls['ville'];
    this.tel = this.form.controls['tel'];
    this.siret = this.form.controls['siret'];
    this.login = this.form.controls['login'];
    this.password = this.form.controls['password'];
    this.statut = this.form.controls['statut'];
    this.admin = this.form.controls['admin'];
    this.mail = this.form.controls['mail'];


  }

    public onSubmit():void {

     this.userToCreate.login=this.login.value;
    this.userToCreate.password=this.password.value;
    this.userToCreate.admin=this.admin.value;
    this.userToCreate.prenom=this.prenom.value;
   this.userToCreate.nom=this.nom.value;              
   this.userToCreate.adresse=this.adresse.value;
     this.userToCreate.ville=this.ville.value;
    this.userToCreate.cdPostal=this.cdPostal.value;
    this.userToCreate.siret=this.siret.value;
    this.userToCreate.tel=this.tel.value;
   this.userToCreate.mail=this.mail.value;              
   this.userToCreate.statut=this.statut.value;


   console.log(this.userToCreate);
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
