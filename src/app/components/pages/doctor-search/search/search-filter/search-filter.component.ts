import { Component , OnInit} from '@angular/core';
import { DoctorsService } from '../../../../../services/doctors.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  selectedDate: Date | undefined;
  selectedGenders: string[] = [];
  selectedSpecialists: string[] = [];
  selectedFields: string[] = [];
  fields: { name: string, value: string, label: string }[] = [];

  minDate: Date;

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.doctorsService.getDoctors().then((doctors) => {
      const fieldSet = new Set<string>();
      doctors.forEach(doctor => {
        if (!fieldSet.has(doctor.field)) {
          fieldSet.add(doctor.field);
          this.fields.push({ name: doctor.field, value: doctor.field, label: doctor.field });
        }
      });
    });

    this.minDate = new Date();
  }
 
  search() {
    console.log('Search clicked');
    console.log('Selected Date:', this.selectedDate);
    console.log('Selected Genders:', this.selectedGenders);
    console.log('Selected Specialists:', this.selectedSpecialists);
  }
}
