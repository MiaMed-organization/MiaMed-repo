import { Component, OnInit } from '@angular/core';
import { Doctors } from '../../../../interfaces/doctors';
import { DoctorsService } from '../../../../services/doctors.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  doctors: Doctors[] = [];
  paginatedDoctors: Doctors[] = [];
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  noResultsFound: boolean = false;

  filters = {
    selectedGenders: [],
    selectedFields: []
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


  onFilterChange(filters: any): void {
    this.filters = filters;
    const filteredDoctors = this.doctorsService.filterDoctors(this.filters);

    if (filteredDoctors === null || filteredDoctors.length === 0) {
      this.noResultsFound = true; // Sonuç bulunamazsa bayrağı kaldır
      this.paginatedDoctors = []; // Doktorları temizle
    } else {
      this.noResultsFound = false; // Sonuç bulunursa bayrağı kaldır
      this.doctors = filteredDoctors;
      this.paginate({ first: 0, rows: 5 }); // Sayfalama işlemini güncelle
    }
  }

  paginate(event: any) {
    const start = event.first;
    const end = start + event.rows;
    this.paginatedDoctors = this.doctors.slice(start, end);
  }

}
