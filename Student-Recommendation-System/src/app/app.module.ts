import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MaterialImportsModule } from './material-imports.module';
import { AcadFormComponent } from './acad-form/acad-form.component';
import { LoginComponent } from './login/login.component';
import { FloatCourseComponent } from './float-course/float-course.component';
import { DialougeComponent } from './dialouge/dialouge.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';

@NgModule({
  declarations: [
  AppComponent,
  RegistrationFormComponent,
  AcadFormComponent,
  LoginComponent,
  FloatCourseComponent,
  DialougeComponent,
  StudentDashboardComponent,
  FacultyDashboardComponent,
  ],
  entryComponents: [DialougeComponent],
  imports: [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  MaterialImportsModule,
  HttpClientModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  })
export class AppModule {}
