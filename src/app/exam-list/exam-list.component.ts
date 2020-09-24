import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Exam } from '../exam.model';
import { ExamService } from '../exam.service'

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

  exams : any;
  constructor(private service : ExamService,
    private router: Router) { }

  ngOnInit(): void {
    
    
    let response = this.service.listExams();
    response.subscribe(data => this.exams = data);
  
  }

    
  public addExam(){
    this.router.navigate(['add-exam'])
  }

}


