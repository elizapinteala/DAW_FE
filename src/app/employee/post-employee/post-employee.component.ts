import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

export interface ENUMS {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-post-employee',
  templateUrl: './post-employee.component.html',
  styleUrls: ['./post-employee.component.css']
})
export class PostEmployeeComponent implements OnInit {

  employee: Employee;
  statusMessage!: string;
  showMsg!: number;

  constructor(private employeeService: EmployeeService) { 
    this.employee = new Employee();
  }

  typeValues: ENUMS[] = [
    { value: "ADMIN", viewValue: 'Admin' },
    { value: "VET", viewValue: 'Vet' },
    { value: "CLEANING", viewValue: 'Cleaning' },
    { value: "VOLUNTEER", viewValue: 'Volunteer' }
  ];

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.employeeService.postAnimal(this.employee).subscribe(data => { this.showMsg = 1; this.statusMessage = "success" },
  error => {
    this.showMsg = 2; this.statusMessage = "error"
  }, () => { });
}

}
