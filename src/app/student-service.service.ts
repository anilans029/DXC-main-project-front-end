import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  API_URL = "http://localhost:8080/api/";

  constructor(private http : HttpClient) {  }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  public addStudent(student){
    return this.http.post(this.API_URL+"student",student,{responseType: "text" as "json"})
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );
  }

  public listStudent(){
    return this.http.get(this.API_URL+"students");
  }

  public searchStudent(id){
    return this.http.get(this.API_URL+"student/"+id);

  }

  public deleteStudent(id){
    return this.http.delete(this.API_URL+"student/"+id)
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );
  }

  public updateStudent(student){
    return this.http.put(this.API_URL+"student",student,{responseType: "text" as "json"})
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );;
  }
}

