import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../exam.service';
import { Marks } from '../marks.model';
import { MarksService } from '../marks.service';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-update-marks',
  templateUrl: './update-marks.component.html',
  styleUrls: ['./update-marks.component.css']
})
export class UpdateMarksComponent implements OnInit {

  marks : any;
  student : any;
  exam : any;
  sid : any;
  eid : any;
  message : any;
  constructor(private service : MarksService,
    private stdService : StudentServiceService,
    private examService : ExamService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    
    this.eid = this.route.snapshot.params['id'];
    this.sid = this.route.snapshot.params['id2'];
    let response =  this.service.listMarksByExamAndStudentId(this.sid,this.eid);
    response.subscribe(data => {
      this.marks = data;
      console.log(this.marks);
    });
    this.searchStudent();
    this.getExam();

  }

  public searchStudent(){
    let response = this.stdService.searchStudent(this.sid);
    response.subscribe(data => this.student = data);
  }

  private getExam(){
    let response = this.examService.searchExam(this.eid);
    response.subscribe(data => this.exam = data);
    console.log(this.exam);
  }

  public updateStudentMarks(){
    this.marks = {} as Marks;
    let response = this.service.updateStudentMarks(this.marks);
    response.subscribe(data => {
      this.message = data
      
    });
    this.router.navigate(["/marks-list",this.eid])

  }

}
