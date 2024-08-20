import { Component , OnInit} from '@angular/core';
import { Doctors } from '../../../../interfaces/doctors';
import { DoctorsService } from '../../../../services/doctors.service';
import { Patients } from '../../../../interfaces/patients';
import { PatientsService } from '../../../../services/patients.service';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrl: './invoice-view.component.css'
})
export class InvoiceViewComponent implements OnInit{

  doctors: Doctors[] = [];
  firstDoctor!: Doctors;

  patients: Patients[] = [];
  firstPatient!: Patients;

  subtotal: number;
  discount: number;
  totalAmount: number;

  fees = [
    { description: 'Genel Danışmanlık', quantity: 1, vat: 0, total: 100 },
    { description: 'Görüntülü görüşme', quantity: 1, vat: 0, total: 250 }
  ];

  constructor(private doctorsService: DoctorsService, private patientsService: PatientsService) {
    this.calculateSubtotal(); // Alt toplamı hesapla
    this.discount = 0.1; // İndirim oranı (örneğin %10 için 0.1)
    this.totalAmount = this.calculateTotalAmount(); // Toplam tutarı hesapla
  }


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

  calculateSubtotal(): void {
    this.subtotal = this.fees.reduce((acc, fee) => {
      return acc + fee.quantity * (fee.vat + fee.total);
    }, 0);
  }

  calculateTotalAmount(): number {
    return this.subtotal - (this.subtotal * this.discount);
  }


}
