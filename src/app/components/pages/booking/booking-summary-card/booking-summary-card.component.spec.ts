import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSummaryCardComponent } from './booking-summary-card.component';

describe('BookingSummaryCardComponent', () => {
  let component: BookingSummaryCardComponent;
  let fixture: ComponentFixture<BookingSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingSummaryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
