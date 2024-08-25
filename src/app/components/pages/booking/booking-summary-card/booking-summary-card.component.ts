import { Component , OnInit} from '@angular/core';
import { Doctors } from '../../../../interfaces/doctors';
import { DoctorsService } from '../../../../services/doctors.service';

@Component({
  selector: 'app-booking-summary-card',
  templateUrl: './booking-summary-card.component.html',
  styleUrl: './booking-summary-card.component.css'
})
export class BookingSummaryCardComponent implements OnInit{

  doctors: Doctors[] = [];
  firstDoctor!: Doctors;

  constructor(private doctorsService: DoctorsService){}

  ngOnInit(): void {
    this.doctorsService.getDoctors().then((data: Doctors[]) => {
      this.doctors = data;
      if (this.doctors.length > 0) {
        this.firstDoctor = this.doctors[0];
      }
    });
  }
}
