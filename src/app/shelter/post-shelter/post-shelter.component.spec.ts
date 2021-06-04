import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostShelterComponent } from './post-shelter.component';

describe('PostShelterComponent', () => {
  let component: PostShelterComponent;
  let fixture: ComponentFixture<PostShelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostShelterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
