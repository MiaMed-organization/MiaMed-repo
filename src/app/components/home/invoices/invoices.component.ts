import { Component, OnInit } from '@angular/core';
import { Patients } from '../../../interfaces/patients';
import { PatientsService } from '../../../services/patients.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent implements OnInit{
  patients!: Patients[];

  constructor(private patientsService: PatientsService) { }
  
     ngOnInit() {
         this.patientsService.getPatientsMini().then((data) => {
             this.patients = data;
         });

        
     }
}
