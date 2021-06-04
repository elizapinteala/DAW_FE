import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../Models/employee';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  displayedColumns = ['type', 'firstName', 'lastName', 'email','actions'];
  employeeList = new MatTableDataSource<Employee>();
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.getAll();
  }

  getAll(){
    this.employeeService.getAll().subscribe(backendResult =>{
      this.employeeList.data=backendResult as Employee[];
    })
  }

  deleteEmployee(idEmployee:number){
    console.log(idEmployee)
    this.employeeService.deleteEmployee(idEmployee).subscribe();
    location.reload()
  }

}
