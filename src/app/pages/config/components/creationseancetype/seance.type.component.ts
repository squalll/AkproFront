import {Component,Output,EventEmitter,OnInit} from '@angular/core';
import {FormGroup,FormBuilder,AbstractControl,Validators,} from '@angular/forms';
import {  SeanceTypeService } from '../../../../_services/index';
import {  UserService } from '../../../../_services/index';

import {  SeanceType } from '../../../../models/seanceType';
import {  User } from '../../../../models/user';

@Component({
  selector: 'creation-seance',
  template: require('./seanceType.html'),
})
export class CreationSeanceType implements OnInit {

  public seanceTypeToCreate:SeanceType;
  
  public form:FormGroup;
  public prix:AbstractControl;
  public cdTypeSeance:AbstractControl;
  public groupe:AbstractControl;
  public nom:AbstractControl;
  public user:AbstractControl;      
  public libelle:AbstractControl;  
  public retro:AbstractControl;


  users: User[];

  constructor( fb:FormBuilder,
              private seanceTypeService: SeanceTypeService,
              private userService: UserService) {

 let retroRegex = '^0\.[0-9]+$';
 let prixRegex = '^[0-9]+$';
        this.form = fb.group({
       'prix': ['', Validators.compose([Validators.required,Validators.pattern(prixRegex)])],
       'cdTypeSeance': ['', Validators.compose([Validators.required])],
      'groupe': ['', Validators.compose([Validators.required])],
      'nom': ['', Validators.compose([Validators.required])],
       'user': ['', Validators.compose([Validators.required])],
      'libelle': ['', Validators.compose([Validators.required ])],
      'retro': ['', Validators.compose([Validators.required,Validators.pattern(retroRegex)])]
    });

    this.prix = this.form.controls['prix'];
    this.cdTypeSeance = this.form.controls['cdTypeSeance'];
    this.groupe = this.form.controls['groupe'];
    this.nom = this.form.controls['nom'];
    this.user = this.form.controls['user'];
    this.retro = this.form.controls['retro'];
    this.libelle = this.form.controls['libelle'];



  }


  getUsers() {
     this.userService.findAll('ACT').subscribe(
                data => {
                  this.users = data;
                },
                error => {
                   console.log(error);
                });
    }
 ngOnInit() {
       this.getUsers(); 
  }

    public onSubmit():void {
 
    this.seanceTypeToCreate= new SeanceType(this.prix.value,this.cdTypeSeance.value,this.groupe.value,this.nom.value,this.user.value,this.libelle.value,this.retro.value);
  console.log( this.user);
     console.log( this.seanceTypeToCreate);
         this.seanceTypeService.create(this.seanceTypeToCreate)   
         .subscribe(
                data => {
                   console.log(data);
                },
                error => {
                   console.log(error);
                });
    
  }
}
