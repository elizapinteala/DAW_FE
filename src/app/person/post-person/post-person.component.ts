import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/Models/person';
import { PersonService } from 'src/app/Services/person.service';

@Component({
  selector: 'app-post-person',
  templateUrl: './post-person.component.html',
  styleUrls: ['./post-person.component.css']
})
export class PostPersonComponent implements OnInit {


  person:Person;
  statusMessage!: string;
  showMsg!: number;
  constructor(private personService: PersonService) { 
    this.person= new Person();
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.personService.postPerson(this.person).subscribe(data => { this.showMsg = 1; this.statusMessage = "success" },
  error => {
    this.showMsg = 2; this.statusMessage = "error"
  }, () => { });
}

}
