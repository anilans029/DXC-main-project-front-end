import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDataManagerComponent } from './student-data-manager/student-data-manager.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { MarksComponent } from './marks/marks.component';
import { MarksListComponent } from './marks-list/marks-list.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';
import { MarksEntryComponent } from './marks-entry/marks-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchStudentComponent,
    StudentListComponent,
    AddStudentComponent,
    StudentDataManagerComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    ExamListComponent,
    AddExamComponent,
    MarksComponent,
    MarksListComponent,
    UpdateMarksComponent,
    MarksEntryComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
