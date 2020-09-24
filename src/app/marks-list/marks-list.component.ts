import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarksService } from '../marks.service';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-marks-list',
  templateUrl: './marks-list.component.html',
  styleUrls: ['./marks-list.component.css']
})
export class MarksListComponent implements OnInit {

  public exam_id : any;
  marksList :any;
  studentsList : any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private stdService : StudentServiceService,
    private service : MarksService ) { }

  ngOnInit(): void {
    this.service.refreshNeeded$.subscribe(()=>{
       
      this.getMarks();
      this.getStudents();
    
    });    
    this.exam_id = this.route.snapshot.params['id'];
    console.log(this.exam_id);
    this.getMarks();
    this.getStudents();
  }

  private getStudents(){
    let response = this.stdService.listStudent();
    response.subscribe(data => this.studentsList = data);
  }

  private getMarks(){
    let response = this.service.listMarksByExamId(this.exam_id);
    response.subscribe(data => this.marksList = data);
  }


  private changeMarks(stdId : any){
    this.updateMarks(stdId,this.exam_id);
    // this.router.navigate(['update-student',stdId])

  }


  private updateMarks(student_id: number,examId:number){
    this.router.navigate(['update-marks',student_id,examId])
  }

}
