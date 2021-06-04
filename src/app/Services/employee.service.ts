import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../Models/employee";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    private employeeUrl: string;
    constructor(private http:HttpClient){
        this.employeeUrl='http://localhost:8080/employee';
    }

    getAll():Observable<Employee[]>{
        return this.http.get<Employee[]>(`${this.employeeUrl}` +`/all`);
    }

    postAnimal(employee: Employee): Observable<Employee>{
        return this.http.post<Employee>(this.employeeUrl, employee, this.httpOptions).pipe(
            tap((newEmployee: Employee) => this.log(`added employee w/ id=${employee.id}`)));
    }

    private log(message: string) {
        console.log(`EmployeeService: ${message}`);
    }

    public deleteEmployee(id:number):Observable<any>{
        return this.http.delete<Employee>(`${this.employeeUrl}/${id}`);
    }
}