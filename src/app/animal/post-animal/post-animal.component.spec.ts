import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAnimalComponent } from './post-animal.component';

describe('PostAnimalComponent', () => {
  let component: PostAnimalComponent;
  let fixture: ComponentFixture<PostAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
