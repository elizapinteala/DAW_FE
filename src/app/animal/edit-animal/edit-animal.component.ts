import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/Models/animal';
import { AnimalService } from 'src/app/Services/animal.service';

export interface ENUMS {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {

  editAnimal:Animal=new Animal();
  showMsg:number=0;

  constructor(private animalService:AnimalService, private route: ActivatedRoute) { }


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
    this.getAnimal();
  }

  getAnimal() {
  
 const id = parseInt(this.route.snapshot.paramMap.get('id')|| '1');

    this.animalService.getAnimal(id).subscribe(data => {
        console.log(data);
        this.editAnimal = data
    });
}

editAnimals(): void {
    this.editAnimal.idShelterAnimal=4;
    this.animalService.editAnimal(this.editAnimal).subscribe(data => { this.showMsg = 1; },
        error => {
            this.showMsg = 2;
        }, () => { });


}

}
