import { Component } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  students: Student[];

  constructor(private sService: StudentService) {
    this.students = this.sService.getStudents();
  }

}