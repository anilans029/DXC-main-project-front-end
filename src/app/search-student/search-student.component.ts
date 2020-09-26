import { Component, OnInit } from '@angular/core';
import { StudentServiceService} from '../student-service.service'
import { Student } from '../student.model';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']

})
export class SearchStudentComponent implements OnInit {

  student : Student = {
    id:0,
    name:'',
    dob:'',
    email:'',
    mobile:''
  };
studentId: number =0;
showStudentTable : boolean = false;
  constructor(private service: StudentServiceService) { }

  ngOnInit(): void {
  }

  public searchStudent(){
    this.showStudentTable = !this.showStudentTable;
    let response = this.service.searchStudent(this.studentId);
    response.subscribe(data => this.student = data);
    
  }
}


