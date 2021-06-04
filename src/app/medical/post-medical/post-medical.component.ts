import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medical } from 'src/app/Models/medical';
import { MedicalService } from 'src/app/Services/medical.service';

export interface ENUMS{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-post-medical',
  templateUrl: './post-medical.component.html',
  styleUrls: ['./post-medical.component.css']
})
export class PostMedicalComponent implements OnInit {

  medical:Medical;
  statusMessage!: string;
  showMsg!: number;

  constructor(private medicalService: MedicalService) { 
    this.medical = new Medical();
  }

  treatmentValues: ENUMS[] = [
    { value: "PILL", viewValue: 'Pill' },
    { value: "VACCIN", viewValue: 'Vaccin' },
    { value: "DROPS", viewValue: 'Drops' },
    { value: "CREAM", viewValue: 'Cream' },
    { value: "BATH", viewValue: 'Bath' },
    { value: "VACCIN", viewValue: 'Vaccin' },
    { value: "HAIRCUT", viewValue: 'Haircut' },
    { value: "SPECIAL_TREATMENT", viewValue: 'Special Treatment' }
  ];
  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.medicalService.postMedical(this.medical).subscribe(data => { this.showMsg = 1; this.statusMessage = "success" },
  error => {
    this.showMsg = 2; this.statusMessage = "error"
  }, () => { });
}

}
