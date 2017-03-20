import {  User } from './user';

export class SeanceType {

    public prix: number;
    public cdTypeSeance: string;
    public groupe: string;
    public nom: string;
    public user: User;
    public libelle: string;
    public retro: Number;
    public cdEtat: string;

  constructor( prix: number,
     cdTypeSeance: string,
     groupe: string,
     nom: string,
     user: User,
     libelle: string,
     retro: Number) { 

      this.prix = prix;
      this.cdTypeSeance = cdTypeSeance;
      this.nom = nom;
      this.groupe = groupe;
      this.user = user;
      this.libelle = libelle;
      this.retro = retro;

      }
}
