import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { ExamService } from '../exam.service';
import {Marks} from '../marks.model';
import { MarksService } from '../marks.service';
import { MarksPK } from '../marksPK.model';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-marks-entry',
  templateUrl: './marks-entry.component.html',
  styleUrls: ['./marks-entry.component.css']
})
export class MarksEntryComponent implements OnInit {

  marks : Marks =new Marks();
  marksPK : MarksPK = new MarksPK();
  exams : any;
  students : any;
  exam_id : any;
  sId : any;
  
  message : any;
  constructor(private service : MarksService,
    private ExamService : ExamService,
    private StudentService : StudentServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.getExams();
    this.getStudents();
  }

  public addStudent(){
    console.log(this.marks)
    let response = this.service.addStudentMarks(this.marks);
    response.subscribe(data => {
      this.message = data;
    });
    this.router.navigate(['/marks-page']);
  }

  private getExams(){
    
    let response = this.ExamService.listExams();
    response.subscribe(data => this.exams = data);

  }

  private getStudents(){
    
    let response = this.StudentService.listStudent();
    response.subscribe(data => this.students = data);

  }

  public addStudentMarks(){

   this.marks.marksPK ={} as MarksPK;
    this.marks.marksPK.exam_id =this.exam_id;
    this.marks.marksPK.student_id=this.sId;
    console.log(this.marks.marksPK.exam_id);
    console.log(this.marks.marksPK.student_id);

    console.log(this.marks)
    let response = this.service.addStudentMarks(this.marks);
    response.subscribe(data => {
      this.message = data;
    });
    this.router.navigate(['/marks-page']);
  }
  }
