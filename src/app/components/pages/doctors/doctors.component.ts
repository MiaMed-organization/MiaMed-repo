import { Component, OnInit, HostListener } from '@angular/core';
import { Doctors } from '../../../interfaces/doctors';
import { DoctorsService } from '../../../services/doctors.service';

interface Sort {
  name: string;
  code: string;
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

  constructor(private doctorsService: DoctorsService) {}

  ngOnInit(): void {
    this.doctorsService.getDoctors().then((data) => {
      this.doctors = data;
      this.doctorCount = this.doctorsService.getDoctorCount();
      this.updateDisplayedDoctors();
    });

    this.sort = [
      { name: 'Puan', code: 'PN' },
      { name: 'Popülerite', code: 'PLR' },
      { name: 'En son', code: 'ES' }
    ];

    this.setPageSizeBasedOnWindowSize(window.innerWidth);
  }

  updateDisplayedDoctors(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedDoctors = this.doctors.slice(start, end);
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
}
