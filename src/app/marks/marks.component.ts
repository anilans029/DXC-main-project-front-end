import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from '../exam.model';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  public exam_id : any;
  public exam : Exam = new Exam();
  public exams : any;
  public listItems : Array<string> = [];
  constructor(private ExamService : ExamService,
    private router : Router) { }

  ngOnInit(): void {

    this.getExams();
  }


  private getExams(){
    
    let response = this.ExamService.listExams();
    response.subscribe(data => this.exams = data);

  }

  public addStudentMarks(){
    this.router.navigate(["add-studentmarks"])
  }   
  
  public listMarks(id : any){
    this.router.navigate(["marks-list",id])
  }

  
}
