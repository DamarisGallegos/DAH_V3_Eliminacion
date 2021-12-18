import { Component } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  students: Student[];

  constructor(private sService: StudentService) {
    this.students = this.sService.getStudents();
  }

}
 
