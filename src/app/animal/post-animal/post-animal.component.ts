import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from 'src/app/Models/animal';
import { AnimalService } from 'src/app/Services/animal.service';

export interface ENUMS {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-post-animal',
  templateUrl: './post-animal.component.html',
  styleUrls: ['./post-animal.component.css']
})
export class PostAnimalComponent implements OnInit {

  animal: Animal;
  statusMessage!: string;
  showMsg!: number;

  constructor(private animalService:AnimalService) {
    this.animal= new Animal();
   }

   genderValues: ENUMS[] = [
    { value: "FEMALE", viewValue: 'Female' },
    { value: "MALE", viewValue: 'Male' }
  ];

  statusValues: ENUMS[] = [
    { value: "AVAILABLE", viewValue: 'Available' },
    { value: "WANTED_FOR_ADOPTION", viewValue: 'Wanted' },
    { value: "UNDER_TREATMENT", viewValue: 'Treatment' }
  ];

  ngOnInit(): void {
  }

  

  onSubmit(form:NgForm){
    
    let date =new Date(this.animal.checkInDate)
    console.log(this.animal.checkInDate)
    this.animalService.postAnimal(this.animal).subscribe(data => { this.showMsg = 1; this.statusMessage = "success" },
  error => {
    this.showMsg = 2; this.statusMessage = "error"
  }, () => { });
}

}
