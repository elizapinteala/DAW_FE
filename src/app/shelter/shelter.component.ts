import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Shelter } from '../Models/shelter';
import { ShelterService } from '../Services/shelter.service';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {

  displayedColumns = ['shelterName', 'address', 'city', 'phone','capacity','actions'];
  shelterList = new MatTableDataSource<Shelter>();
  constructor(private shelterService: ShelterService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.shelterService.getAll().subscribe(backendResult =>{
      this.shelterList.data=backendResult as Shelter[];
    })
  }

  deleteShelter(idShelter:number){
    console.log(idShelter)
    this.shelterService.deleteShelter(idShelter).subscribe();
    location.reload()
  }

}
