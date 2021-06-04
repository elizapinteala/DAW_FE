import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Shelter } from "../Models/shelter";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ShelterService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    private shelterUrl: string;

    constructor(private http:HttpClient){
        this.shelterUrl='http://localhost:8080/shelter';
    }

    getAll():Observable<Shelter[]>{
        return this.http.get<Shelter[]>(`${this.shelterUrl}`+'/all');
    }

    postShelter(shelter: Shelter): Observable<Shelter>{
        return this.http.post<Shelter>(this.shelterUrl, shelter, this.httpOptions).pipe(
            tap((newShelter: Shelter) => this.log(`added shelter w/ id=${shelter.id}`)));
    }

    private log(message: string) {
        console.log(`ShelterService: ${message}`);
    }

    public deleteShelter(id:number):Observable<any>{
        return this.http.delete<Shelter>(`${this.shelterUrl}/${id}`);
    }
}