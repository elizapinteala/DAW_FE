import { Component, OnInit } from '@angular/core';
import { Donation } from '../Models/donations';
import { MatTableDataSource } from '@angular/material/table';
import { DonationService } from '../Services/donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  displayedColumns = ['donationDate', 'amount', 'shelterName', 'firstNamePerson','lastNamePerson','actions'];
  donationList = new MatTableDataSource<Donation>();

  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.donationService.getAll().subscribe(backendResult =>{
      this.donationList.data=backendResult as Donation[];
    })
  }

  deleteDonation(idDonation:number){
    console.log(idDonation)
    this.donationService.deleteDonation(idDonation).subscribe();
    location.reload()
  }


}
