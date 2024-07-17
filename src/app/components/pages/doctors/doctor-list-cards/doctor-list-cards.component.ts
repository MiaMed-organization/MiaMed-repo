import { Component, Input } from '@angular/core';
import { Doctors } from '../../../../interfaces/doctors';


@Component({
  selector: 'app-doctor-list-cards',
  templateUrl: './doctor-list-cards.component.html',
  styleUrl: './doctor-list-cards.component.css'
})
export class DoctorListCardsComponent {
  @Input() doctor!: Doctors;

}
