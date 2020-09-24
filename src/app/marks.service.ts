import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  API_URL = "http://localhost:8080/";
  constructor(private http : HttpClient) {  }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }


  public listMarks(){
    return this.http.get(this.API_URL+"marks");
  }

  public listMarksByExamId(id){
    return this.http.get(this.API_URL+"mark/"+id);
  }

  public listMarksByExamAndStudentId(sid,eid){
    return this.http.get(this.API_URL+"marks/"+sid+"/"+eid);
  }

  public updateStudentMarks(studentMarks){
    return this.http.put(this.API_URL+"marks",studentMarks,{responseType: "text" as "json"})
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );;
  }

  public addStudentMarks(studentMarks){
    return this.http.post(this.API_URL+"marks",studentMarks,{responseType: "text" as "json"})
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );
  }

}
