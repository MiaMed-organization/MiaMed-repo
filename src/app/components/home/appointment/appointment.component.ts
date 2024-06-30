import { Component, OnInit } from '@angular/core';
import { Patients } from '../../../interfaces/patients';
import { PatientsService } from '../../../services/patients.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit{
     patients!: Patients[];
     dateOptions: any[] = [];
     selectedDateOption: any;

     constructor(private patientsService: PatientsService) {}

     ngOnInit() {
         this.patientsService.getPatientsMini().then((data) => {
             this.patients = data;
         });

         this.dateOptions = [
          { label: 'Bugün', value: 'today' },
          { label: 'Bu ay', value: 'this_month' },
          { label: 'Son 7 gün', value: 'last_7_days' }
      ];
     }
 
     
}
