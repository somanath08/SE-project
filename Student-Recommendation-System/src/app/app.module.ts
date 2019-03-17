import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MaterialImportsModule } from './material-imports.module';
import { AcadFormComponent } from './acad-form/acad-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, RegistrationFormComponent, AcadFormComponent, LoginComponent],
  imports: [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  MaterialImportsModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  })
export class AppModule {}
