import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcadFormComponent } from './acad-form/acad-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'acadform', component: AcadFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  })
export class AppRoutingModule {}
