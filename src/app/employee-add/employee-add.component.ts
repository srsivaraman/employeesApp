import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import labels from '../../assets/labels.json';

@Component({
	selector: 'app-employee-add',
	templateUrl: './employee-add.component.html',
	styleUrls: ['./employee-add.component.css']

})
export class EmployeeAddComponent implements OnInit {

	@Output() getEmployees = new EventEmitter<boolean>();
	angForm: FormGroup;
	labels:{};
	constructor(private fb: FormBuilder, private bs: EmployeesService) {
		this.createForm();
	}

	createForm() {
		this.angForm = this.fb.group({
			employee_name: ['', Validators.required ],
			company_name: ['', Validators.required ],
			employee_id: ['', Validators.required ]
		});
	}

	addEmployees() {

		console.log("allformdata",this.angForm.value);
		this.bs.addEmployees(this.angForm.value).subscribe(
			(result) => {

				if(result){
					console.log('Result received');
					console.log(result);
					this.createForm();
					this.getEmployees.emit();
				}

			}
		); 
	}

	ngOnInit() {
		this.labels = labels;
		console.log("labels",labels);
	}

}
