import { Component } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  students: Student[]= new Array();
  
  constructor(private studentService: StudentService,private alert: AlertController) {
    this.students = this.studentService.getStudents();
  }

  operation(pos: number,ev): void{
   
    if (ev.detail.side === 'start') {

    this.studentService.changesStatus(pos);

     } else{
        this.showAlert(pos);
    }
  }

  changeStatus(pos: number): void{
    this.studentService.changesStatus(pos);
  }





  async showAlert(pos: number) {
    const al = await this.alert.create({
      header: 'Confirmar',
      message: '¿Seguro que desea eliminar?',
      buttons: [{
        text: 'No',
        
      }, {
        text: 'Si',
        handler: () => {
          this.studentService.deleteStudent(pos);
        
        }
      }]
    });
    await al.present();
  }


}
