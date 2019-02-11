import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  uri = environment.apiEndpoint + `employees`;

  constructor(private http: HttpClient) { }

  addEmployees(obj) {
	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
	return this.http.post(`${this.uri}/add`, obj)
  }

  getAllEmployees() {
	return this
	   .http
	   .get(`${this.uri}`);
  }

  editEmployees(id) {
	return this
		.http
		.get(`${this.uri}/edit/${id}`);
  }

  deleteEmployees(id) {
	return this
		.http
		.delete(`${this.uri}/delete/${id}`);
  }
}
