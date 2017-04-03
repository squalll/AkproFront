import {Component,OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

import {  Patient } from '../../models/patient';
import {  SeanceType } from '../../models/seanceType';
import {  Seance } from '../../models/seance';
import {  PatientsService } from '../../_services/index';
import {  SeanceTypeService } from '../../_services/index';
import {  SeanceService } from '../../_services/index';

@Component({
  selector: 'calendar',
  template: require('./calendar.html')
})
export class CalendarComponent  implements OnInit{

  events: any[];  

    header: any;

    event: Seance;
    patients: Patient[];
    seanceTypes: SeanceType[];
    
    
    dialogVisible: boolean = false;
    
  constructor( private patientsService: PatientsService,private seanceTypeService: SeanceTypeService,private seanceService: SeanceService) {}

    handleEventClick(e) {
     //   this.event = new Seance(e.calEvent.id,);
        //this.event.title = e.calEvent.title;
        
        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if(e.view.name === 'month') {
            start.stripTime();
        }
        
        if(end) {
            end.stripTime();
            this.event.end = end.format();
        }
        this.event = new Seance(e.calEvent.id,start.format(),end,null,null,null,null,1);

    }

    handleDayClick(event) {


        this.event = new Seance(null,"10:00","11:00",event.date.format(),event.date.format(),null,null,1);
     
        this.dialogVisible = true;
    }

    saveEvent() {
        //update
        if(this.event.id) {
            let index: number = this.findEventIndexById(this.event.id);
            if(index >= 0) {
                this.events[index] = this.event;
            }
        }
        //new
        else {
            var datePipe = new DatePipe();
             let start = datePipe.transform(this.event.startTime, 'yyyy-MM-dd HH:mm');
               let end = datePipe.transform(this.event.endTime, 'yyyy-MM-dd HH:mm');
            let startDate :Date = new Date( this.event.startTime);
            this.event.start =  start;
            this.event.end =    end;
             this.event.startTime = null; 
             this.event.endTime = null; 

            console.log(start);
            
            console.log( end );


            this.events.push(this.event);

  
      
            this.seanceService.create(this.event) .subscribe(
                data => {
                     this. getSeances();
                },
                error => {
                   console.log(error);
                });

            this.event = null;

          
        }
        
        this.dialogVisible = false;
    }
    
    deleteEvent() {
        let index: number = this.findEventIndexById(this.event.id);
        if(index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    }
    
    findEventIndexById(id: number) {
        let index = -1;
        for(let i = 0; i < this.events.length; i++) {
            if(id == this.events[i].id) {
                index = i;
                break;
            }
        }
        
        return index;
    }

    getPatients() {
     this.patientsService.findAll('ACT').subscribe(
                data => {
                  this.patients = data;
                },
                error => {
                   console.log(error);
                });
    }

      getSeanceType() {
     this.seanceTypeService.findAll('ACT').subscribe(
                data => {
                  this.seanceTypes = data;
                },
                error => {
                   console.log(error);
                });
    }
  
      getSeances() {
     this.seanceService.findAllWithUsers().subscribe(
                data => {
                  this.events = data;
                },
                error => {
                   console.log(error);
                });
    }

ngOnInit() {

    this.getPatients() ;

    this.getSeanceType() ;

    this. getSeances();


      this.header = {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
		};
    }

}
