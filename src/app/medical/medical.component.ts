import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Medical } from '../Models/medical';
import { MedicalService } from '../Services/medical.service';


@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {


  displayedColumns = ['chartDate', 'disease', 'treatment', 'animalName','actions'];
  medicalList = new MatTableDataSource<Medical>();


  constructor(private medicalService: MedicalService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.medicalService.getAll().subscribe(backendResult =>{
      this.medicalList.data=backendResult as Medical[];
    })
  }

  deleteMedical(idMedical:number){
    console.log(idMedical)
    this.medicalService.deleteMedical(idMedical).subscribe();
    location.reload()
  }

}
