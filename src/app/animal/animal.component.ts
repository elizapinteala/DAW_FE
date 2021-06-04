import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Animal } from '../Models/animal';
import { AnimalService } from '../Services/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  
  displayedColumns = ['status', 'name', 'age', 'gender', 'specie', 'breed', 'checkInDate', 'actions'];
  animalList = new MatTableDataSource<Animal>();
  constructor(private animalservice: AnimalService) {


   }


  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.animalservice.getAll().subscribe(backendresult=>{
      this.animalList.data=backendresult as Animal[];
    })
  }

  deleteAnimal(idAnimal:number){
    console.log(idAnimal)
    this.animalservice.deleteAnimal(idAnimal).subscribe();
    location.reload()
  }
}
