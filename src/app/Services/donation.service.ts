import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Donation } from "../Models/donations";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DonationService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    private donationUrl: string;

    constructor(private http:HttpClient){
        this.donationUrl='http://localhost:8080/donation';
    }

    getAll():Observable<Donation[]>{
        return this.http.get<Donation[]>(`${this.donationUrl}`+`/all`);
    }

    postDonation(donation: Donation): Observable<Donation>{
        return this.http.post<Donation>(this.donationUrl, donation, this.httpOptions).pipe(
            tap((newDonation: Donation) => this.log(`added donation w/ id=${donation.id}`)));
    }

    private log(message: string) {
        console.log(`AnimalService: ${message}`);
    }

    public deleteDonation(id:number):Observable<any>{
        return this.http.delete<Donation>(`${this.donationUrl}/${id}`);
    }
}