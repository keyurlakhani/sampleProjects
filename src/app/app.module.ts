import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
