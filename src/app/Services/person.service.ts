import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "../Models/person";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class PersonService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    private personUrl: string;

    constructor(private http:HttpClient){
        this.personUrl='http://localhost:8080/person';
    }

    getAll():Observable<Person[]>{
        return this.http.get<Person[]>(`${this.personUrl}`+`/all`);
    }

    postPerson(person: Person): Observable<Person>{
        return this.http.post<Person>(this.personUrl, person, this.httpOptions).pipe(
            tap((newPerson: Person) => this.log(`added person w/ id=${person.id}`)));
    }

    private log(message: string) {
        console.log(`PersonService: ${message}`);
    }

    public deletePerson(id:number):Observable<any>{
        return this.http.delete<Person>(`${this.personUrl}/${id}`);
    }
}

