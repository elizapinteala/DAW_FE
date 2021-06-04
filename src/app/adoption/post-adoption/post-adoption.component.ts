import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Adoption } from 'src/app/Models/adoption';
import { AdoptionService } from 'src/app/Services/adoption.service';

@Component({
  selector: 'app-post-adoption',
  templateUrl: './post-adoption.component.html',
  styleUrls: ['./post-adoption.component.css']
})
export class PostAdoptionComponent implements OnInit {

  adoption: Adoption;
  statusMessage!: string;
  showMsg!: number;
  
  constructor(private adoptionService: AdoptionService) {
    this.adoption= new Adoption();
   }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    let date =new Date(this.adoption.adoptionDate)
    console.log(this.adoption.adoptionDate)
    this.adoptionService.postAdoption(this.adoption).subscribe(data => { this.showMsg = 1; this.statusMessage = "success" },
  error => {
    this.showMsg = 2; this.statusMessage = "error"
  }, () => { });
}

}
