import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MaterialImportsModule } from './material-imports.module';

@NgModule({
  declarations: [AppComponent, RegistrationFormComponent],
  imports: [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  MaterialImportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  })
export class AppModule {}
