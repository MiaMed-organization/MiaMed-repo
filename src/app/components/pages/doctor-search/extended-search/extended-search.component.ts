import { Component, OnInit } from '@angular/core';
import { Doctors } from '../../../../interfaces/doctors';
import { DoctorsService } from '../../../../services/doctors.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-extended-search',
  templateUrl: './extended-search.component.html',
  styleUrl: './extended-search.component.css'
})
export class ExtendedSearchComponent implements OnInit{
  doctors: Doctors[] = [];
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  paginatedDoctors: any[] = [];
  noResultsFound: boolean = false;

  filters = {
    selectedGenders: [],
    selectedAvailableDays: [],
    minPrice: 0,
    maxPrice: 10000,
    selectedFields: [],
    selectedExperience: [],
    selectedConsultations: [],
    selectedRatings: [],
    selectedLanguages: []
  };


  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.doctorsService.getDoctors().then(data => {
      this.doctors = data;
      this.paginatedDoctors = this.doctors.slice(0, 5); // İlk 5 doktoru göster
    });

    this.items = [
      { icon: 'pi pi-home', route: '/home' },
      { label: 'Doktor Ara', route: '/search' },
      { label: 'Kapsamlı Doktor Ara', route: '/extended-search' }
    ];
  }

  // loadInitialDoctors(): void {
  //   this.doctorsService.getDoctors().then(data => {
  //     this.doctors = data;
  //     this.paginatedDoctors = this.doctors.slice(0, 5);
  //   });
  // }

  onFilterChange(filters: any): void {
    this.filters = filters;
    const filteredDoctors = this.doctorsService.filterDoctors(this.filters);

    if (filteredDoctors === null || filteredDoctors.length === 0) {
      this.noResultsFound = true;
      this.paginatedDoctors = [];
    } else {
      this.noResultsFound = false;
      this.doctors = filteredDoctors;
      this.paginate({ first: 0, rows: 5 });
    }
  }

  paginate(event: any): void {
    const start = event.first;
    const end = start + event.rows;
    this.paginatedDoctors = this.doctors.slice(start, end);
  }

}
