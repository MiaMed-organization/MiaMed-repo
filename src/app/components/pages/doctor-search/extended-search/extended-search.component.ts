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
  first: number = 0;


  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.doctorsService.getDoctors().then((data) => {
      this.doctors = data;
      this.paginate({ first: 0, rows: 10 });
    });

    this.items = [{ icon: 'pi pi-home', route: '/home' }, { label: 'Doktor Ara', route: '/search' }, { label: 'Kapsamlı Doktor Ara', route: '/extended-search' }];
  }

  paginate(event: any) {
    this.first = event.first;
    this.paginatedDoctors = this.doctors.slice(this.first, this.first + event.rows);
  }
}
