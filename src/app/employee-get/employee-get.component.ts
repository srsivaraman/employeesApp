import { Component, OnInit } from '@angular/core';
import Employees from '../Employees';
import { EmployeesService } from '../employees.service';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import labels from '../../assets/labels.json';

@Component({
	selector: 'app-employee-get',
	templateUrl: './employee-get.component.html',
	styleUrls: ['./employee-get.component.css']
})
export class EmployeeGetComponent implements OnInit {

	employees: Employees[];
	labels:{};
	constructor(private bs: EmployeesService) { }

	ngOnInit() {
		this.employees = [];
		this.listEmployees();
		this.labels = labels;
		
	}

	deleteEmployees(id) {
		this.bs.deleteEmployees(id).subscribe(res => {
			console.log('Deleted');
			if(res){
				this.listEmployees(); 
			}
		});
	}


	listEmployees(){
		this.bs
				.getAllEmployees()
				.subscribe((data: Employees[]) => {
					this.employees = data;
			});
	}


	getAllEmployees() {
			return this.listEmployees(); 
	}
}
