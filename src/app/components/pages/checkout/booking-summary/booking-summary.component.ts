import { Component, OnInit } from '@angular/core';
import { Doctors } from '../../../../interfaces/doctors';
import { DoctorsService } from '../../../../services/doctors.service';
import { Patients } from '../../../../interfaces/patients';
import { PatientsService } from '../../../../services/patients.service';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrl: './booking-summary.component.css'
})
export class BookingSummaryComponent implements OnInit{
  doctors: Doctors[] = [];
  firstDoctor!: Doctors;

  patients: Patients[] = [];
  firstPatient!: Patients;

  totalFee: number = 0;

  constructor(private doctorsService: DoctorsService, private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.doctorsService.getDoctors().then((data: Doctors[]) => {
      this.doctors = data;
      if (this.doctors.length > 0) {
        this.firstDoctor = this.doctors[0];
      }

      this.calculateTotalFee();
    });

    this.patientsService.getPatients().then((data: Patients[]) => {
      this.patients = data;
      if (this.patients.length > 0) {
        this.firstPatient = this.patients[0];
      }

      this.calculateTotalFee(); 
    });
  }

  calculateTotalFee(): void {
    if (this.firstDoctor && this.firstPatient) {
      this.totalFee = this.firstDoctor.consultationFee + this.firstPatient.bookingFee + this.firstPatient.consultingFee.price;
    }
  }
}
