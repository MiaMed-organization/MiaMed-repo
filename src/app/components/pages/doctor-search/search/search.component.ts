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
  first: number = 0;

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.doctorsService.getDoctors().then((data) => {
      this.doctors = data;
      this.paginate({ first: 0, rows: 10 }); // Başlangıçta ilk sayfayı yükle
    });

    this.items = [
      { icon: 'pi pi-home', route: '/home' },
      { label: 'Doktor Ara', route: '/search' },
      { label: 'Kapsamlı Doktor Ara', route: '/extended-search' }
    ];
  }

  paginate(event: any) {
    this.first = event.first;
    this.paginatedDoctors = this.doctors.slice(this.first, this.first + event.rows);
  }
}
