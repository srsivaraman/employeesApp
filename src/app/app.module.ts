import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component';

import { EmployeesService } from './employees.service';

@NgModule({
	declarations: [
		AppComponent,
		EmployeeAddComponent,
		EmployeeGetComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SlimLoadingBarModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [ EmployeesService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
