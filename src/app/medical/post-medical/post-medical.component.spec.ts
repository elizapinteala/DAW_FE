import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMedicalComponent } from './post-medical.component';

describe('PostMedicalComponent', () => {
  let component: PostMedicalComponent;
  let fixture: ComponentFixture<PostMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
