import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students : any ;
  message : any;

  constructor(private service : StudentServiceService,
    private router: Router) { }

  ngOnInit() {

    this.service.refreshNeeded$.subscribe(()=>{

      this.getStudents();
    });

    this.getStudents();

  }

  private getStudents(){
    
    let response = this.service.listStudent();
    response.subscribe(data => this.students = data);

  }

  
  public updateStudent(id : number){
    this.router.navigate(['update-student',id])
  }

  public deleteStudent(id : number){
    if(confirm("Are you sure to delete "+id)) {
    this.router.navigate(['delete-student',id])
  }
}
}
