import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student [] = new Array();

  constructor() { 
    this.students.push({
    name: 'Damaris Yaquelin Gallegos Navarro',
    controlnumber: '17400980',
    active: true,
    });
    this.students.push({
      name: 'Israel Arjona Vizcaino',
      controlnumber: '17401780',
      active: true,
      });
      this.students.push({
        name: 'Pedro Perez',
        controlnumber: '17400958',
        active: false,
        });  
     
  }

getStudents(): Student[]{
  return this.students; 
}

changesStatus(position: number): void{
  this.students[position].active=!this.students[position].active;
}

deleteStudent(position: number): void {
  this.students.splice(position, 1);
}

}
