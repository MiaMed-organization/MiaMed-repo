import { Component, Input } from '@angular/core';
import { Doctors } from '../../../../interfaces/doctors';

@Component({
  selector: 'app-doctor-grid-card',
  templateUrl: './doctor-grid-card.component.html',
  styleUrl: './doctor-grid-card.component.css'
})
export class DoctorGridCardComponent {
  @Input() doctor!: Doctors;
}
