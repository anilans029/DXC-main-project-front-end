import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Exam } from './exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  API_URL = "http://localhost:8080/";

  constructor(private http : HttpClient) {  }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  public addExam(exam){
    return this.http.post(this.API_URL+"exam",exam,{responseType: "text" as "json"})
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );
  }


  public getExamNames(): Observable<any>{
    return this.http.get<Exam[]>(this.API_URL+"exams")
  }

  public listExams(){
    return this.http.get(this.API_URL+"exams");
  }

  public searchExam(id){
    return this.http.get(this.API_URL+"exam/"+id);

  }
}
