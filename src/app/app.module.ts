import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule} from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeComponent } from './employee/employee.component';
import { PersonComponent } from './person/person.component';
import { ShelterComponent } from './shelter/shelter.component';
import { MedicalComponent } from './medical/medical.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { PostAnimalComponent } from './animal/post-animal/post-animal.component';
import { DonationComponent } from './donation/donation.component';
import { PostAdoptionComponent } from './adoption/post-adoption/post-adoption.component';
import { PostEmployeeComponent } from './employee/post-employee/post-employee.component';
import { PostDonationComponent } from './donation/post-donation/post-donation.component';
import { PostMedicalComponent } from './medical/post-medical/post-medical.component';
import { PostShelterComponent } from './shelter/post-shelter/post-shelter.component';
import { PostPersonComponent } from './person/post-person/post-person.component';
import { EditAnimalComponent } from './animal/edit-animal/edit-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    EmployeeComponent,
    PersonComponent,
    ShelterComponent,
    MedicalComponent,
    AdoptionComponent,
    PostAnimalComponent,
    DonationComponent,
    PostAdoptionComponent,
    PostEmployeeComponent,
    PostDonationComponent,
    PostMedicalComponent,
    PostShelterComponent,
    PostPersonComponent,
    EditAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatOptionModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSortModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatFormFieldModule, 
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,        // <----- import for date formating(optional)
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
