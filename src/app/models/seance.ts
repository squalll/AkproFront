import {  Patient } from './patient';
import {  SeanceType } from './seanceType';


export class Seance {


  constructor(
    public id: number,
    public startTime: string,
    public endTime: string,
    public start: string,
    public end: string,
    public patient: Patient,
    public seanceType: SeanceType,
    public nbRepeat: number
  ) {  }
}
