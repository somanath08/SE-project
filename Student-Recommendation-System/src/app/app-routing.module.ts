import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcadFormComponent } from './acad-form/acad-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FloatCourseComponent } from './float-course/float-course.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'acadform', component: AcadFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'floatcourse', component: FloatCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  })
export class AppRoutingModule {}
