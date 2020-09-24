import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  student : any;
  id : any;
  message :any
  constructor(private service : StudentServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
        let response = this.service.deleteStudent(this.id);
      response.subscribe(data => this.message = data);
    
  //  this.router.navigate(['student-list']);
  }

  public studentList(){
    this.router.navigate(['/student-list']);
  }

}
