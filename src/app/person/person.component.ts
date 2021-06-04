import { Component, OnInit } from '@angular/core';
import { Person } from '../Models/person';
import { MatTableDataSource } from '@angular/material/table';
import { PersonService } from '../Services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {


  displayedColumns = ['firstName', 'lastName', 'address', 'city','phone','email','actions'];
  personList = new MatTableDataSource<Person>();
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.personService.getAll().subscribe(backendResult =>{
      this.personList.data=backendResult as Person[];
    })
  }

  deletePerson(idPerson:number){
    console.log(idPerson)
    this.personService.deletePerson(idPerson).subscribe();
    location.reload()
  }

}
