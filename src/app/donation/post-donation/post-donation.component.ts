import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donation } from 'src/app/Models/donations';
import { DonationService } from 'src/app/Services/donation.service';

@Component({
  selector: 'app-post-donation',
  templateUrl: './post-donation.component.html',
  styleUrls: ['./post-donation.component.css']
})
export class PostDonationComponent implements OnInit {

  donation: Donation;
  statusMessage!: string;
  showMsg!: number;

  constructor(private donationService: DonationService) { 
    this.donation= new Donation();
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    let date =new Date(this.donation.donationDate)
    console.log(this.donation.donationDate)
    this.donationService.postDonation(this.donation).subscribe(data => { this.showMsg = 1; this.statusMessage = "success" },
  error => {
    this.showMsg = 2; this.statusMessage = "error"
  }, () => { });
}

}
