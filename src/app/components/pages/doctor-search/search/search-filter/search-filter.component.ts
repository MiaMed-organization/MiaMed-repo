import { Component, Output, EventEmitter } from '@angular/core';
import { DoctorsService } from '../../../../../services/doctors.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {

  @Output() filtersChanged = new EventEmitter<any>();

  selectedDate: Date | undefined;
  selectedGenders: string[] = [];
  selectedFields: string[] = [];
  fields: any[] = []; 

  minDate: Date;

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
     this.doctorsService.getDoctors().then(doctors => {
      const allFields = doctors.map(doctor => doctor.field);
      this.fields = [...new Set(allFields)]; // Benzersiz alanlar
      this.fields = this.fields.map(field => ({ name: field, value: field, label: field }));
    });

    this.minDate = new Date();
  }
 
  search():void {
    const filters = {
      selectedGenders: this.selectedGenders,
      selectedFields: this.selectedFields,
      selectedDate: this.selectedDate
    };

    this.filtersChanged.emit(filters);
  }


  reset(): void {
    window.location.reload(); 
  }
  
}
