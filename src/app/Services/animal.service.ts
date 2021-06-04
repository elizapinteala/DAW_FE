import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Animal } from "../Models/animal";
import { catchError, tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AnimalService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    private animalUrl: string;

    constructor(private http:HttpClient){
        this.animalUrl='http://localhost:8080/animal';
    }

    getAll():Observable<Animal[]>{
        return this.http.get<Animal[]>(`${this.animalUrl}`+'/all');
    }

    postAnimal(animal: Animal): Observable<Animal>{
        return this.http.post<Animal>(this.animalUrl, animal, this.httpOptions).pipe(
            tap((newAnimal: Animal) => this.log(`added animal w/ id=${animal.id}`)));
    }

    private log(message: string) {
        console.log(`AnimalService: ${message}`);
    }

    public deleteAnimal(id:number):Observable<any>{
        return this.http.delete<Animal>(`${this.animalUrl}/${id}`);
    }

    /**
     * Method to get one player
     * @param id 
     */
     public getAnimal(id: number): Observable<Animal> {
        return this.http.get<Animal>(`${this.animalUrl}/${id}`);
    }

    editAnimal(editAnimal: Animal): Observable<Animal> {
        return this.http.put<Animal>(this.animalUrl + "/" + editAnimal.idAnimal, editAnimal, this.httpOptions).pipe(
            tap(_ => this.log('edited animal with ID: ' + editAnimal.id)),
            catchError(this.handleError<any>('edit animal', []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            this.log(`${operation} failed: ${error.message}`);

            window.alert(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }
}




