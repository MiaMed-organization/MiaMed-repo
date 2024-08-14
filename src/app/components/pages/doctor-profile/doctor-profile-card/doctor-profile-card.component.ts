import { Component, Input } from '@angular/core';
import { Doctors } from '../../../../interfaces/doctors';

@Component({
  selector: 'app-doctor-profile-card',
  templateUrl: './doctor-profile-card.component.html',
  styleUrl: './doctor-profile-card.component.css'
})
export class DoctorProfileCardComponent{
  @Input() doctor!: Doctors;
}
