import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Medical } from "../Models/medical";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class MedicalService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    private medicalUrl: string;

    constructor(private http:HttpClient){
        this.medicalUrl='http://localhost:8080/medical';
    }

    getAll():Observable<Medical[]>{
        return this.http.get<Medical[]>(`${this.medicalUrl}` + `/all`);
    }

    postMedical(medical: Medical): Observable<Medical>{
        return this.http.post<Medical>(this.medicalUrl, medical, this.httpOptions).pipe(
            tap((newMedical: Medical) => this.log(`added medical chart w/ id=${medical.id}`))
        );
    }

    private log(message: string) {
        console.log(`MedicalService: ${message}`);
    }

    public deleteMedical(id:number):Observable<any>{
        return this.http.delete<Medical>(`${this.medicalUrl}/${id}`);
    }
}