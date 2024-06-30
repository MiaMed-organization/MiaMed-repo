import { Component, OnInit } from '@angular/core';
import { Patients } from '../../../interfaces/patients';
import { PatientsService } from '../../../services/patients.service';

@Component({
  selector: 'app-upcoming-appointment',
  templateUrl: './upcoming-appointment.component.html',
  styleUrl: './upcoming-appointment.component.css'
})
export class UpcomingAppointmentComponent implements OnInit{
  patient: Patients = {};  

  constructor(private patientsService: PatientsService) { }
  
  ngOnInit(): void {
    this.getPatientData();
  }

  getPatientData(): void {
    this.patientsService.getPatients().then(patients => {
      // Fetch the first patient or any specific patient based on your logic
      this.patient = patients[0];
    });
  }
}
