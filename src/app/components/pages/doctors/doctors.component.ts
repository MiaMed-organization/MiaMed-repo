import { Component, OnInit, HostListener } from '@angular/core';
import { Doctors } from '../../../interfaces/doctors';
import { DoctorsService } from '../../../services/doctors.service';
import { ChangeDetectorRef } from '@angular/core';

interface Sort {
  label: string;
  value: string;
}

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent implements OnInit {
  doctors!: Doctors[];
  displayedDoctors!: Doctors[];
  doctorCount: number = 0;

  sortedBy: Sort | undefined;
  sort: Sort[] | undefined; 
  
  viewMode: 'grid' | 'list' = 'grid';

  pageSize: number = 6;
  currentPage: number = 1;

  constructor(private doctorsService: DoctorsService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.doctorsService.getDoctors().then((data) => {
      this.doctors = data;
      this.doctorCount = this.doctorsService.getDoctorCount();
      this.sortDoctors();
      this.updateDisplayedDoctors();
    });

    this.sort = [
      { label: 'Puan', value: 'rating' },
      { label: 'Popülerite', value: 'recommendation' },
      { label: 'En son', value: 'default' }
    ];

    this.doctorsService.getDoctors().then((data) => {
      this.doctors = data;
      this.doctorCount = this.doctorsService.getDoctorCount();
      this.updateDisplayedDoctors();
  });

  this.setPageSizeBasedOnWindowSize(window.innerWidth);
  }

  updateDisplayedDoctors(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedDoctors = this.doctors.slice(start, end);
    console.log('Displayed Doctors After Update:', this.displayedDoctors);
}


  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayedDoctors();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.setPageSizeBasedOnWindowSize(event.target.innerWidth);
    this.updateDisplayedDoctors();
  }

  setPageSizeBasedOnWindowSize(width: number): void {
    this.pageSize = width <= 700 ? 4 : 6;
  }

  activateButton(viewMode: 'grid' | 'list'): void {
    this.viewMode = viewMode;
  }

  sortDoctors(): void {
    if (this.sortedBy?.value === 'rating') {
        this.doctors.sort((a, b) => b.rating - a.rating);
        console.log('Sorted by Rating:', this.doctors);
    } else if (this.sortedBy?.value === 'recommendation') {
        this.doctors.sort((a, b) => b.recommended - a.recommended);
        console.log('Sorted by Recommendation:', this.doctors);
    } else if (this.sortedBy?.value === 'default') {
        this.doctors = [...this.doctorsService.getDoctorsData()];
        console.log('Sorted by Default:', this.doctors);
    }
    this.updateDisplayedDoctors(); 
    console.log('Displayed Doctors:', this.displayedDoctors);
    this.cdr.detectChanges(); 
}


  onSortChange(): void {
    this.sortDoctors(); 
    console.log('Sort option changed:', this.sortedBy);
  }
}
