import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Shelter } from 'src/app/Models/shelter';
import { ShelterService } from 'src/app/Services/shelter.service';

@Component({
  selector: 'app-post-shelter',
  templateUrl: './post-shelter.component.html',
  styleUrls: ['./post-shelter.component.css']
})
export class PostShelterComponent implements OnInit {

  shelter: Shelter;
  statusMessage!: string;
  showMsg!: number;

  constructor(private shelterService: ShelterService) { 
    this.shelter= new Shelter();
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.shelterService.postShelter(this.shelter).subscribe(data => { this.showMsg = 1; this.statusMessage = "success" },
  error => {
    this.showMsg = 2; this.statusMessage = "error"
  }, () => { });
}

}
