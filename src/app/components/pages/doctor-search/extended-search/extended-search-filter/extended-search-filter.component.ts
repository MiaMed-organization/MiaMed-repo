import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../../../../services/doctors.service';

@Component({
  selector: 'app-extended-search-filter',
  templateUrl: './extended-search-filter.component.html',
  styleUrls: ['./extended-search-filter.component.css']
})
export class ExtendedSearchFilterComponent implements OnInit {
  selectedGenders: string[] = [];
  selectedFields: string[] = [];
  selectedAvailableDays: string[] = [];
  selectedExperience: string[] = [];
  selectedConsultations: string[] = [];
  selectedLanguages: string[] = [];
  selectedRatings: number[] = [];

  rangeValues: number[] = [20, 80];
  minPrice: number = 10;
  maxPrice: number = 10000;

  ratings: number[] = [5, 4, 3, 2, 1];

  languages: string[] = []; // Servisten gelen tüm diller
  fields: { name: string, value: string, label: string }[] = [];
  availableDays: string[] = [];
  consultationTypes: { type: string, icon: string }[] = [];

  sections = {
    gender: true,
    availability: true,
    fee: true,
    specialty: true,
    experience: true,
    consultation: true,
    rating: true,
    language: true
  };

  constructor(private doctorsService: DoctorsService) {}

  ngOnInit(): void {
    //price
    this.updatePriceRange();

    this.doctorsService.getDoctors().then((doctors) => {
      const fieldSet = new Set<string>();
      const availableDaySet = new Set<string>();
      const consultationSet = new Map<string, string>();
      const languageSet = new Set<string>();

      doctors.forEach(doctor => {
        // Uzmanlık alanları
        if (!fieldSet.has(doctor.field)) {
          fieldSet.add(doctor.field);
          this.fields.push({ name: doctor.field, value: doctor.field, label: doctor.field });
        }

        // Available Day alanları
        if (!availableDaySet.has(doctor.availableDay)) {
          availableDaySet.add(doctor.availableDay);
          this.availableDays.push(doctor.availableDay);
        }

        // Consultation alanları
        doctor.consultation.forEach(consultation => {
          if (!consultationSet.has(consultation.type)) {
            consultationSet.set(consultation.type, consultation.icon);
            this.consultationTypes.push({ type: consultation.type, icon: consultation.icon });
          }
        });

        // Dil alanları
        doctor.languages.forEach(language => {
          if (!languageSet.has(language)) {
            languageSet.add(language);
            this.languages.push(language);
          }
        });

      });
    });
  }

  updatePriceRange() {
    // Slider'daki seçilmiş aralıkları güncelleyebilirsiniz.
    this.rangeValues = [...this.rangeValues]; 
  }

  toggleSection(section: string) {
    this.sections[section] = !this.sections[section];
    console.log(this.sections[section]);  // Bu satır ile değeri kontrol edebilirsiniz
  }
  
  resetFilters() {
    this.selectedGenders = [];
    this.selectedFields = [];
    this.selectedAvailableDays = [];
    this.selectedExperience = [];
    this.selectedConsultations = [];
    this.selectedRatings = [];
    this.selectedLanguages = [];
    this.rangeValues = [20, 80];
  }
}
