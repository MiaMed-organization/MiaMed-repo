import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorGridCardComponent } from './doctor-grid-card.component';

describe('DoctorGridCardComponent', () => {
  let component: DoctorGridCardComponent;
  let fixture: ComponentFixture<DoctorGridCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorGridCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
