import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Adoption } from "../Models/adoption";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AdoptionService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    private adoptionUrl: string;

    constructor(private http:HttpClient){
        this.adoptionUrl='http://localhost:8080/adoption';
    }

    getAll():Observable<Adoption[]>{
        return this.http.get<Adoption[]>(`${this.adoptionUrl}`+`/all`);
    }

    postAdoption(adoption: Adoption): Observable<Adoption>{
        return this.http.post<Adoption>(this.adoptionUrl, adoption, this.httpOptions).pipe(
            tap((newAdoption: Adoption) => this.log(`added adoption w/ id=${adoption.id}`))
        );
    }

    private log(message: string) {
        console.log(`AdoptionService: ${message}`);
    }

    public deleteAdoption(id:number):Observable<any>{
        return this.http.delete<Adoption>(`${this.adoptionUrl}/${id}`);
    }
}