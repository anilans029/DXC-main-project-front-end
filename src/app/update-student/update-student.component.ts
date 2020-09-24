import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student : any;
  id : number;
  
  message : any;
  constructor(private service : StudentServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    let response =  this.service.searchStudent(this.id);
    response.subscribe(data => {
      this.student = data;
      console.log(this.student);
    })
    
  }

  public updateStudent(){
    console.log(this.student)
    let response = this.service.updateStudent(this.student);
    response.subscribe(data => {
      this.message = data
      
    });
    this.router.navigate(['/student-list']);

  }

}
