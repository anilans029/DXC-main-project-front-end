import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDataManagerComponent } from './student-data-manager/student-data-manager.component';
import {  UpdateStudentComponent } from './update-student/update-student.component'
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { MarksComponent } from './marks/marks.component';
import { MarksListComponent } from './marks-list/marks-list.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';
import { MarksEntryComponent } from './marks-entry/marks-entry.component';

const routes: Routes = [
  {
    path : "", redirectTo: "Student-Data-Manager" , pathMatch : "full"
  },
  {
    path : "Student-Data-Manager", component : StudentDataManagerComponent
  },
  {
    path : "add-student" , component : AddStudentComponent
  },
  {
    path : "search-student" , component : SearchStudentComponent
  },
  {
    path : "student-list", component : StudentListComponent
  },
  {
    path: "update-student/:id", component: UpdateStudentComponent
  }
  ,
  {
    path: "delete-student/:id", component: DeleteStudentComponent
  }
  ,
  {
    path: "exam-list", component: ExamListComponent
  }
  ,
  {
    path: "add-exam", component: AddExamComponent
  },
  {
    path: "marks-page", component: MarksComponent
  },
  {
    path: "marks-list/:id", component: MarksListComponent
  },
  {
    path: "update-marks/:id/:id2", component: UpdateMarksComponent
  }
  ,
  {
    path: "add-studentmarks", component: MarksEntryComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }