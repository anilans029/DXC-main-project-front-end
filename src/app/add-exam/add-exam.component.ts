import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService} from '../exam.service';
import {Exam } from '../exam.model';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {

  exam : Exam = new Exam();
  message : any;


  constructor(private service : ExamService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  public addExam(){
    console.log(this.exam)
    let response = this.service.addExam(this.exam);
    response.subscribe(data => {
      this.message = data;
    });
    this.router.navigate(['/exam-list']);
  }

}
