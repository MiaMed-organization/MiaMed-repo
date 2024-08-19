import { Component, OnInit } from '@angular/core';
import { Doctors } from '../../../interfaces/doctors';
import { DoctorsService } from '../../../services/doctors.service';
import { Patients } from '../../../interfaces/patients';
import { PatientsService } from '../../../services/patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrl: './booking-success.component.css',
})
export class BookingSuccessComponent implements OnInit{

  doctors: Doctors[] = [];
  firstDoctor!: Doctors;

  patients: Patients[] = [];
  firstPatient!: Patients;

  constructor(private doctorsService: DoctorsService, private patientsService: PatientsService, private router: Router) {}

  ngOnInit(): void {
    this.doctorsService.getDoctors().then((data: Doctors[]) => {
      this.doctors = data;
      if (this.doctors.length > 0) {
        this.firstDoctor = this.doctors[0];
      }

    });

    this.patientsService.getPatients().then((data: Patients[]) => {
      this.patients = data;
      if (this.patients.length > 0) {
        this.firstPatient = this.patients[0];
      }

    });
  }


  redirectToInvoice() {
    this.router.navigate(['/invoice-view']); // Yönlendirmek istediğiniz rota
  }

}
