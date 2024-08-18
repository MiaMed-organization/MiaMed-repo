import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImgCardComponent } from './profile-img-card.component';

describe('ProfileImgCardComponent', () => {
  let component: ProfileImgCardComponent;
  let fixture: ComponentFixture<ProfileImgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileImgCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileImgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
