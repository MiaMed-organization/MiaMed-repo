import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListCardsComponent } from './doctor-list-cards.component';

describe('DoctorListCardsComponent', () => {
  let component: DoctorListCardsComponent;
  let fixture: ComponentFixture<DoctorListCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorListCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
