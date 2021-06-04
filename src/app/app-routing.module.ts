import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptionComponent } from './adoption/adoption.component';
import { PostAdoptionComponent } from './adoption/post-adoption/post-adoption.component';
import { AnimalComponent } from './animal/animal.component';
import { EditAnimalComponent } from './animal/edit-animal/edit-animal.component';
import { PostAnimalComponent } from './animal/post-animal/post-animal.component';
import { AppComponent } from './app.component';
import { DonationComponent } from './donation/donation.component';
import { PostDonationComponent } from './donation/post-donation/post-donation.component';
import { EmployeeComponent } from './employee/employee.component';
import { PostEmployeeComponent } from './employee/post-employee/post-employee.component';
import { MedicalComponent } from './medical/medical.component';
import { PostMedicalComponent } from './medical/post-medical/post-medical.component';
import { PersonComponent } from './person/person.component';
import { PostPersonComponent } from './person/post-person/post-person.component';
import { PostShelterComponent } from './shelter/post-shelter/post-shelter.component';
import { ShelterComponent } from './shelter/shelter.component';

const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  { path: 'animal', component: AnimalComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'person', component: PersonComponent },
  { path: 'shelter', component: ShelterComponent },
  { path: 'medical', component: MedicalComponent },
  { path: 'adoption', component: AdoptionComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'animal/add', component: PostAnimalComponent },
  { path: 'adoption/add', component: PostAdoptionComponent },
  { path: 'employee/add', component: PostEmployeeComponent },
  { path: 'donation/add', component: PostDonationComponent },
  { path: 'medical/add', component: PostMedicalComponent },
  { path: 'shelter/add', component: PostShelterComponent },
  { path: 'person/add', component: PostPersonComponent },
  { path: 'animal/edit/:id', component: EditAnimalComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
