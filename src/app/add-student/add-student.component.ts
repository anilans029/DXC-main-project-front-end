import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student : Student = new Student();
  
  message : any;
  constructor(private service : StudentServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  public addStudent(){
    console.log(this.student)
    let response = this.service.addStudent(this.student);
    response.subscribe(data => {
      this.message = data;
    });
    this.router.navigate(['/student-list']);
  }

}
