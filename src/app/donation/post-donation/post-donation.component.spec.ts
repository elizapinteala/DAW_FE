import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDonationComponent } from './post-donation.component';

describe('PostDonationComponent', () => {
  let component: PostDonationComponent;
  let fixture: ComponentFixture<PostDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
