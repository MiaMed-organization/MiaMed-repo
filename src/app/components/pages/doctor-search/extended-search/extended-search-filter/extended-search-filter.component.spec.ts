import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedSearchFilterComponent } from './extended-search-filter.component';

describe('ExtendedSearchFilterComponent', () => {
  let component: ExtendedSearchFilterComponent;
  let fixture: ComponentFixture<ExtendedSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtendedSearchFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtendedSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
